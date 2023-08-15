/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ua"],
    defaultLocale: "en",
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
