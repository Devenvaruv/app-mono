const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["storage.googleapis.com", "www.usfca.edu", "media.licdn.com", "avatars.githubusercontent.com"],
    unoptimized: true,
  },
}

module.exports = nextConfig
