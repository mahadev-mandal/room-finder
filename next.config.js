/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});

// Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
module.exports = {
  eslint: {
    dirs: ['pages', 'utils'], 
  },
}

module.exports = {
  images: {
    domains: ['images.pexels.com'],
  },
}
