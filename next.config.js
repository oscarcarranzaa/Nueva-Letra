/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  extends: ['plugin:@next/next/recommended', 'plugin:react/recommended'],
  images: {
    domains: ['localhost']
  }
}
module.exports = nextConfig
