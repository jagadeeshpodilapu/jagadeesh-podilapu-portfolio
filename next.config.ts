import type { NextConfig } from 'next';
const basePath = process.env.GITHUB_PAGES === 'true' ? '/jagadeesh-podilapu-portfolio' : '';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: process.cwd(),
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};
export default nextConfig;
