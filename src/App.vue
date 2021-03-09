<template>
  <router-view></router-view>
</template>

<script>
import { Config } from 'vue-superset'
import { Util } from '@/common'
export default {
  created () {
    // 全局配置
    const env = process.env.NODE_ENV
    const countryCode = process.env.VUE_APP_COUNTRY_CODE
    const pjson = require('../package.json')
    console.log('env:', env)
    console.log('version:', pjson.version)
    Config.custom = {
      appId: Util.getAppId(), // 应用ID，必配项
      appName: 'paas-app-adminauth', // 默认应用配置，必配项
      interfacePathMap: { // 接口路径映射
        'paas-app-adminauth': {
          interfaceDomain: this.$util.getInterfaceDomain(env, { appName: 'paas-app-adminauth', countryCode }),
          publicPath: '/paas/app/adminauth',
          mockPublicPath: '/mock/14/paas/app'
        }
      }
    }

    // token失效回调方法
    this.$http.onTokenTimeout = () => {
      this.$router.replace({
        path: '/login'
      })
    }
  }
}
</script>
