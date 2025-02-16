/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/helenaltv/auxesis/**",
      },
    ],
  },
  // ❌ Ta bort i18n eftersom vi använder en manuell /en/ mapp
};

export default nextConfig;
