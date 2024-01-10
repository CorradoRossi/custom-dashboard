/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig
