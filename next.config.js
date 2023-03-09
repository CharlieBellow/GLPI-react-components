/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.github.com',
          port: '',
          pathname: '/charliebellow**',
        },
      ],
  },
};


module.exports = nextConfig
