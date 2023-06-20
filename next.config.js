/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

module.exports = {
  reactStrictMode: true,
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
    ];
  },
};
