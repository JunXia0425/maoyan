const path = require('path') //导入path模块

//抽离一个函数
function resolve (url) {
    return path.resolve(__dirname, url)
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('components', resolve('./src/components'))
            .set('styles', resolve('./src/assets/styles'))
            .set('pages', resolve('./src/pages'))
    },
    devServer: {
        proxy: {
          '/history': {
            target: 'https://webapi.115.com',
            changeOrigin: true
          }
        }
      }
}