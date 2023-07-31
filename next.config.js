/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});


module.exports = withBundleAnalyzer(
  {
  images: {
    domains: [
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "i.ytimg.com",
      "lh3.googleusercontent.com",
    ],
  },
   experimental: {
    nextScriptWorkers: true,
  },
 
}
)