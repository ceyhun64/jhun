import type { NextConfig } from "next";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

const nextConfig: NextConfig = {
  // ✅ Yeni Turbopack anahtarını buraya koyuyoruz
  turbopack: {},

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(new PrismaPlugin());
    }
    return config;
  },

  // ⚠️ images.domains yerine artık remotePatterns kullanılmalı
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
