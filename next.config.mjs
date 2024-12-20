/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"], // Aktivera AVIF och WebP
<<<<<<< HEAD
=======
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'auxesis.se',
      },
    ],
>>>>>>> origin/main
  },
};

export default nextConfig;
