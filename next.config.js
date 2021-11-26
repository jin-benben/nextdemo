/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const theme = require('./config/theme') 
// next.config.js
const withLess = require("next-with-less");

module.exports = withLess({

  lessLoaderOptions: {
    /* ... */
    lessOptions: {
      /* ... */
      modifyVars: {
        "primary-color": "#9900FF",
        "border-radius-base": "2px",
        /* ... */
      },
    },
  },
},{
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
     );

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[contenthash].css'
      })
    );

    return config;
  },
  reactStrictMode: true,
});


