/** @type {import('next').NextConfig} */
const theme = require('./config/theme') 
// next.config.js
const withLess = require("next-with-less");

module.exports = withLess({
  images: {
    domains: ['imgniu.zhaojiafang.com','qiniu.zhaojiafang.com'],
  },
  reactStrictMode: true,
  lessLoaderOptions: {
    /* ... */
    lessOptions: {
      /* ... */
      modifyVars: theme,
    },
  },
});


