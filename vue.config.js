const path = require("path");
module.exports = {
  // 调整webpack配置,添加configureWebpack对象
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'assets/css/index.less')]
    }
  }
}
