/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    Next_API_KEY: process.env.Next_API_KEY,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "rb.gy"],
  },
};
