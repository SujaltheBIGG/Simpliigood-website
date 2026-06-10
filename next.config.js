/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // We load Barlow Condensed via a <link> in app/layout.tsx. Next's automatic
  // font optimization tries to fetch + inline that stylesheet at build time,
  // which this sandbox can't reach — turning it off keeps the build clean and
  // lets the browser load the font at runtime instead. (Safe to re-enable in a
  // normal environment with network access.)
  optimizeFonts: false,
  // Enable SWC minification for faster builds and smaller bundles
  swcMinify: true,
  // Enable gzip compression
  compress: true,
  // Optimize images
  images: {
    // All placeholder photography is served from the Unsplash CDN.
    // Swap these for your own campaign images later — just add the new
    // host here (or move the files into /public and use local paths).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Production optimizations
  productionBrowserSourceMaps: false,
  // Reduce build time
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Add security and performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
