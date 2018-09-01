const webpack = require('webpack');
const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');

// const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config ={

    devtool: 'source-map',
    entry: "./src/app/index.js",
    
      output: {
        path: path.join(__dirname, '/dist'),
        // publicPath: '/',
        filename: 'bundle.js'
    },

    module:{
        rules:[
            {
                test:/\.js?/,
                include:SRC_DIR, 
                loader:"babel-loader",
                query:{
                    presets:['react', 'es2015', 'stage-2']
                },
                exclude: /node_modules/
            },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },

            {
              test: /\.(css|scss)$/,
              loaders: ['style-loader', 'css-loader', 'sass-loader'], include: [
                path.join(__dirname, 'src')
              ]
            },
            {
              test: /\.(jpe?g|gif|png)$/,
              loader: 'file-loader?name=images/[name].[ext]'
            },
         ]
    },
    devServer: { 
    // outputPath: buildPath,
    historyApiFallback: true,
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ]
};

module.exports = config;