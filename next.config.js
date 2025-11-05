/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1] || '';
const isProd = process.env.NODE_ENV === 'production' && !!repo;

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true }
};

module.exports = nextConfig;


