/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/jpeg", "image/png", "image/jpg"],
    domains: ["auxesis.se"], // Externa domäner om nödvändigt
  },
};

export default nextConfig;
