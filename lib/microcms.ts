// microCMS APIクライアント（サーバー側専用）
// このファイルは api/ 配下のサーバーレス関数からのみimportしてください。
// クライアントコードから直接importすると、APIキーがバンドルに露出します。

import { createClient } from 'microcms-js-sdk';

type Client = ReturnType<typeof createClient>;
let _client: Client | null = null;

export function getClient(): Client {
  if (_client) return _client;

  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    throw new Error('MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を環境変数に設定してください');
  }

  _client = createClient({ serviceDomain, apiKey });
  return _client;
}
