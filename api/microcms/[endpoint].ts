// Vercel Serverless Function: microCMS API Proxy
// このファイルはVercelにデプロイすると /api/microcms/:endpoint として機能します
//
// 必要な環境変数:
//   MICROCMS_SERVICE_DOMAIN = <microCMSのサブドメイン>
//   MICROCMS_API_KEY        = <microCMSのAPIキー（Get権限のみで可）>
//
// 使用例:
//   GET /api/microcms/voice                     → 美容師の声リスト
//   GET /api/microcms/blog                      → ブログ記事リスト
//   GET /api/microcms/faq?orders=-sortOrder     → FAQリスト（sortOrder降順）
//   GET /api/microcms/salon-info                → サロン情報（単一オブジェクト）

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getClient } from '../../lib/microcms.js';

const LIST_ENDPOINTS = new Set(['voice', 'blog', 'faq']);
const OBJECT_ENDPOINTS = new Set(['salon-info']);

// orders に許可するフィールド名（インジェクション防止）
const ALLOWED_ORDER_FIELDS = new Set([
  'sortOrder', '-sortOrder',
  'publishedAt', '-publishedAt',
  'createdAt', '-createdAt',
  'updatedAt', '-updatedAt',
  'date', '-date',
]);

const CACHE_DURATION = 60; // 1分

type CacheEntry = { data: unknown; fetchedAt: number };
const cache = new Map<string, CacheEntry>();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { endpoint, orders } = req.query;

  if (typeof endpoint !== 'string') {
    return res.status(400).json({ error: 'endpoint must be a string' });
  }

  const isList = LIST_ENDPOINTS.has(endpoint);
  const isObject = OBJECT_ENDPOINTS.has(endpoint);

  if (!isList && !isObject) {
    return res.status(404).json({ error: `Unknown endpoint: ${endpoint}` });
  }

  // ordersのバリデーション（カンマ区切りで複数可）
  let ordersValue: string | undefined;
  if (typeof orders === 'string' && orders.length > 0) {
    const fields = orders.split(',').map(s => s.trim());
    const invalid = fields.filter(f => !ALLOWED_ORDER_FIELDS.has(f));
    if (invalid.length > 0) {
      return res.status(400).json({ error: `Invalid orders field(s): ${invalid.join(',')}` });
    }
    ordersValue = fields.join(',');
  }

  // キャッシュキー（endpoint + orders で個別キャッシュ）
  const cacheKey = ordersValue ? `${endpoint}?orders=${ordersValue}` : endpoint;

  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.fetchedAt < CACHE_DURATION * 1000) {
    res.setHeader('Cache-Control', `s-maxage=${CACHE_DURATION}, stale-while-revalidate`);
    res.setHeader('X-Cache', 'HIT');
    return res.json(cached.data);
  }

  try {
    const client = getClient();
    const data = isObject
      ? await client.getObject({ endpoint })
      : await client.getList({
          endpoint,
          queries: {
            limit: 100,
            ...(ordersValue ? { orders: ordersValue } : {}),
          },
        });

    cache.set(cacheKey, { data, fetchedAt: Date.now() });
    res.setHeader('Cache-Control', `s-maxage=${CACHE_DURATION}, stale-while-revalidate`);
    res.setHeader('X-Cache', 'MISS');
    return res.json(data);
  } catch (err) {
    console.error(`microCMS fetch error for ${endpoint}:`, err);
    return res.status(500).json({ error: 'Failed to fetch from microCMS' });
  }
}
