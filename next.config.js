/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "i.ytimg.com",
      "lh3.googleusercontent.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/about-us",
        destination: "/static/about-us",
      },
      {
        source: '/faq',
        destination: '/static/faq'
      }
    ];
  },
};
