/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"], // Aktivera AVIF och WebP
    domains: ["i.ibb.co"], // Externa domäner om nödvändigt
  },
};

export default nextConfig;
