/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ 关键：添加这行
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
