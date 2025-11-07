/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // i18n kaldırıldı, çünkü App Router kendi yönetiyor
};

export default nextConfig;
