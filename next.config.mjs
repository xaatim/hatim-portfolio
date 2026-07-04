/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hatim-portfolio',
  assetPrefix: '/hatim-portfolio',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}
export default nextConfig
