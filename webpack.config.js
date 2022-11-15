import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
export default {
  mode: 'development',
  context: path.resolve('src'),
  entry: {

    test1:['./index.js',
   './index1.js','./test1.js'],
    // test2:['./test1.js']
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('dist'),
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css'
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
