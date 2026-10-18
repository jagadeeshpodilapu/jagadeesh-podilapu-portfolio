import { existsSync } from 'node:fs';
import { join } from 'node:path';

export function publicAssetExists(publicPath: string): boolean {
  return existsSync(join(process.cwd(), 'public', publicPath.replace(/^\/+/, '')));
}
