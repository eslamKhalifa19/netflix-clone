/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },

  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "rb.gy"],
  },
};
