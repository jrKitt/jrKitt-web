import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img2.pic.in.th',
        port: '',
        pathname: '/pic/**',
      },
      {
        protocol: 'https',
        hostname: 'img5.pic.in.th',
        port: '',
        pathname: '/file/secure-sv1/**',
      },
    ],
  },
};

export default nextConfig;
