/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['github.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
