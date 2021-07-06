const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          // 配置babel
         {
           loader: "babel-loader",
           options:{
             presets:[
               "@babel/preset-env"
             ]
           }
         },
          "ts-loader"
        ],
        exclude: /node-modules/
      },

      // less
      {
        test: /\.less$/,
        use:[
          "style-loader",
          "css-loader",
          // 引入 postcss
          // {
          //   loader: "post-css",
          //   options:{
          //     postOptions:{
          //       plugins:[
          //         "postcss-preset-env",
          //         {
          //           browsers: 'last 2 versions'
          //         }
          //       ]
          //     }
          //   }
          // },
          "less-loader"
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}