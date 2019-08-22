const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'utils.js',
    path: path.resolve(__dirname, 'build'),
    library: 'utils', // script引用后挂载到window上的全局变量名
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  mode: process.env.NODE_ENV
}