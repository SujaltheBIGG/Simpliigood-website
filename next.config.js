/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // We load Barlow Condensed via a <link> in app/layout.tsx. Next's automatic
  // font optimization tries to fetch + inline that stylesheet at build time,
  // which this sandbox can't reach — turning it off keeps the build clean and
  // lets the browser load the font at runtime instead. (Safe to re-enable in a
  // normal environment with network access.)
  optimizeFonts: false,
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
  },
};

module.exports = nextConfig;
