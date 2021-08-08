const { resolve  } = require('path')
module.exports = {
    lintOnSave: false, // 关闭eslint
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
    }
}