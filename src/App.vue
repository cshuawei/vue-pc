<template>
  <router-view></router-view>
</template>

<script>
import { Config } from 'vue-superset'
export default {
  created () {
    // 全局配置
    Config.custom = {
      appId: 'paas-ui-app',
      timeout: 6000,
      lang: 'zh'
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
