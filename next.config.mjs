import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url)).replace(/[\\/]$/, '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: rootDir,
  },
};

export default nextConfig;
