const { resolve  } = require('path')
module.exports = {
    publicPath: '',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    lintOnSave: false, // 关闭eslint
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
    }
}
