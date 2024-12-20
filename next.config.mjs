/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["auxesis.se"], // Externa domäner om nödvändigt
  },
};

export default nextConfig;
