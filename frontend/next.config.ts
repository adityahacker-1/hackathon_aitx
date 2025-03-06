/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Not actually needed with nginx, but you can use this for local testing if necessary
  async rewrites() {
      return [
          {
              source: '/api/:path*',
              destination: 'http://localhost:5500/api/:path*',
          },
      ]
  },
}

module.exports = nextConfig
