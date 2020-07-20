const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: ['@babel/polyfill', './src/index.js'],
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 3000
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/preset-env'],
                  plugins: ['@babel/plugin-proposal-class-properties']
          }
         },
         {
            test: /\.(scss|css)$/,
            use: ["style-loader","css-loader", "sass-loader"]
    
        },
           {
            test: /.(png|woff(2)?|eot|ttf|svg|gif|jpe?g)(\?[a-z0-9=\.]+)?$/,
            loader: 'file-loader',
            options: {
             name: '[name].[Hash].[ext]',
             outputPath: "assets"
            },
        },
       
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ]
}