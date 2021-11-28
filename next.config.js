/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const theme = require('./config/theme') 
// next.config.js
const withLess = require("next-with-less");

module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    /* ... */
    lessOptions: {
      /* ... */
      modifyVars: theme,
    },
  },
});


