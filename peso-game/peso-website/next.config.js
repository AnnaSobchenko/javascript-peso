/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  // i18n: {
  //   locales: ["en", "ua"],
  //   defaultLocale: "en",
  // },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
