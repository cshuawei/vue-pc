const global = require('./global.config')
const proxy = {}

const env = process.env.NODE_ENV
if (env === 'mock') {
  proxy[global.mockPublicPath] = {
    target: 'https://' + global.mockDomain,
    changeOrigin: true // 允许使用localhost
  }
} else {
  proxy[global.devPublicPath] = {
    target: 'https://' + global.devDomain,
    changeOrigin: true // 允许使用localhost
  }
}

module.exports = {
  publicPath: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') ? global.secondLevelDir : '/',
  devServer: {
    proxy
  },
  "transpileDependencies": [ // 通过Babel显式转译一个依赖
    "vuetify"
  ]
}
