export default {
  input: './src/main.js', //入口文件
  output: [
  {
    file: './dist/bundle_amd.js', // 打包后的存放文件
    format: 'amd', // 输出格式 amd es iife umd cjs
  }, {
    file: './dist/bundle_es.js', // 打包后的存放文件
    format: 'es', // 输出格式 amd es iife umd cjs
  }, {
    file: './dist/bundle_iife.js', // 打包后的存放文件
    format: 'iife', // 输出格式 amd es iife umd cjs
    name: 'Utils' // 如果iife,umd需要指定一个全局变量
  }, {
    file: './dist/bundle_umd.js', // 打包后的存放文件
    format: 'umd', // 输出格式 amd es iife umd cjs
    name: 'Utils' // 如果iife,umd需要指定一个全局变量
  }, {
    file: './dist/bundle_cjs.js', // 打包后的存放文件
    format: 'cjs', // 输出格式 amd es iife umd cjs
  }]
}