/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"], // Aktivera AVIF och WebP
    remotePatterns: [
      {
        protocol: "https",
        hostname: "auxesis.se",
      },
    ],
  },
};

export default nextConfig;
