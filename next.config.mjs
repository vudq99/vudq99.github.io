/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a static HTML app for github public page
  output: 'export',

  // Disable ESLint and TypeScript checks during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig