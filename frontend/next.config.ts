/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Use standalone mode for deployment
  reactStrictMode: true,
  async rewrites() {
      return [
          {
              source: '/:path*',
              destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
          },
      ]
  },
};

module.exports = nextConfig;
