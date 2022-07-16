/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['ui']);
const { i18n } = require('./next-i18next.config');

module.exports = withTM({
  i18n,
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['countryflagsapi.com']
  }
  ,webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
