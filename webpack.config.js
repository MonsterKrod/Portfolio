var path = require("path");

//PETA!
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
        use: [ 'style-loader', 'css-loader' ]
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
            }],
      }

    ],

    loaders: [{
      test: /\.css/,
      loader: 'style-loader!css-loader!autoprefixer-loader'
    }]
  }

};
