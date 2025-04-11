import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.wired.com',
        port: '',
        pathname: '',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
