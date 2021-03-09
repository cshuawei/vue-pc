const env = process.env.NODE_ENV
const proxyPath = process.env.VUE_APP_PROXY_PATH
const proxy = {
  '/admin/': {
    target: `https://${proxyPath}paas-app-admin.e-buy.com`,
    changeOrigin: true // 允许使用localhost
  }
}

module.exports = {
  publicPath: '/',
  devServer: {
    proxy
  },
  configureWebpack: {
    devtool: env === 'production' ? undefined : 'eval-source-map'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('~', 'vue-superset/es/pc')
  }
}
