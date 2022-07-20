/** @type {import('next').NextConfig} */
require("dotenv").config();

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  env: {
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
    ALCHEMY_API_KEY_URL: process.env.ALCHEMY_API_KEY_URL,
  },
};
