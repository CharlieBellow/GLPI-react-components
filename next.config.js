/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.github.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["github.com"],
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
