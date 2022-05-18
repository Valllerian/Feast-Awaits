/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SECRET: process.env.SECRET,

  },
}

module.exports = nextConfig


