// Vercel Serverless Function: Instagram Graph API Proxy
// このファイルはVercelにデプロイするとAPIエンドポイント /api/instagram として機能します
//
// 必要な環境変数（Vercel Dashboard > Settings > Environment Variables に設定）:
//   INSTAGRAM_ACCESS_TOKEN = <Long-lived Access Token>
//
// アクセストークンの取得手順:
// 1. https://developers.facebook.com/ でアプリを作成
// 2. Instagram Graph API を有効化
// 3. ユーザーアクセストークンを取得（60日有効）
// 4. Long-lived Access Tokenに交換（詳細は README.instgram.md 参照）

import type { VercelRequest, VercelResponse } from '@vercel/node';

const FIELDS = 'id,media_url,media_type,permalink,caption,timestamp,thumbnail_url';
const CACHE_DURATION = 60 * 60; // 1時間キャッシュ（秒）

let cache: { data: unknown; fetchedAt: number } | null = null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // キャッシュが有効な場合はキャッシュを返す
  if (cache && Date.now() - cache.fetchedAt < CACHE_DURATION * 1000) {
    res.setHeader('Cache-Control', `s-maxage=${CACHE_DURATION}, stale-while-revalidate`);
    res.setHeader('X-Cache', 'HIT');
    return res.json(cache.data);
  }

  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    // トークン未設定の場合は空データを返す（コンポーネント側でプレースホルダーを表示）
    return res.status(200).json({ data: [], error: 'INSTAGRAM_ACCESS_TOKEN not configured' });
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=9&access_token=${token}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errBody = await response.text();
      console.error('Instagram API error:', errBody);
      return res.status(200).json({ data: [], error: 'Instagram API error' });
    }

    const data = await response.json();

    // キャッシュを更新
    cache = { data, fetchedAt: Date.now() };

    res.setHeader('Cache-Control', `s-maxage=${CACHE_DURATION}, stale-while-revalidate`);
    res.setHeader('X-Cache', 'MISS');
    return res.json(data);
  } catch (err) {
    console.error('Instagram fetch error:', err);
    return res.status(200).json({ data: [], error: 'Fetch failed' });
  }
}
