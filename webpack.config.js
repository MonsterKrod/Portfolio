const path = require("path");
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    app: ["./src/public/js/main.js"]
  },
  output: {
    path: __dirname + "/build",
    publicPath: "/src/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' , 'postcss-loader']
      },

      {
        test: /\.html$/,
        use: [{
              loader: 'html-loader',
              options: {
                minimize: true,
                removeComments: true,
                collapseWhitespace: false
              }
            }]
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
       }
    })
  ]
}
