//** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"], // Aktivera AVIF och WebP
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", // GitHubs värd för råa filer
        pathname: "/helenaltv/auxesis/**", // Byt ut mot rätt användarnamn och repo
      },
    ],
  },
};

export default nextConfig;
