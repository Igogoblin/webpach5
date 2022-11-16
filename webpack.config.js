import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {
  mode: 'development',
  context: path.resolve('src'),
  entry: {
    mybundle:['./index.js',
   './index1.js','./test1.js'],
    test2:['./test1.js']
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  })],
  
  module: {
    rules: [
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
  ],
  },
  
};

// let test = path.resolve('dist', 'assets');
// console.log(test);
// в name будут имена test
// path: то где будет собираться
// context упрощает путь до файла было - ./src/index  after ./index
// plugins: [new MiniCssExtractPlugin()], for bundel all css
// npm install html-webpack-plugin --save-dev
// подключаем свой html 
