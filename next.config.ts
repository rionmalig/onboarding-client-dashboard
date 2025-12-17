import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '4313631.fs1.hubspotusercontent-na1.net',
        port: '',
        pathname: '/hubfs/4313631/**',
      },
    ],
  },
};

export default nextConfig;
