/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  env: {
    API_URL: 'http://localhost:3000',
  }
}

module.exports = nextConfig
