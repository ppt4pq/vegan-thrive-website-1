import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 🔥 disables type checking during Vercel build
  },
};

export default nextConfig;
