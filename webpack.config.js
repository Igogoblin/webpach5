import path from 'path';
export default {
  mode: 'development',
  entry: [
    './src/index.js',
    './src/index1.js',
  ],
  output: {
    filename: 'build.[contenthash].js',
  }
};

// let test = path.resolve('dist', 'assets');
// console.log(test);