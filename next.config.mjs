/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'hatim-portfolio'
const isUserPage = repoName?.endsWith('.github.io')
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH
const basePath = configuredBasePath ?? (isUserPage ? '' : `/${repoName}`)

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
