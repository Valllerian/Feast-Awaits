/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SECRET: process.env.SECRET,
    // SECRET: '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',
  },
}

module.exports = nextConfig


