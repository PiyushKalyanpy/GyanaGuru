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
  
};
