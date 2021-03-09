import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponents from './components'
import vuetify from './plugins/vuetify'
import { Common, Pc } from 'vue-superset'
import myCommon from './common'
import '~/style/common.css'
import '~/style/navigation.css'
import '~/style/swal.css'
import '~/fonts/PingFang-SC-Regular.css'

Vue.config.productionTip = false

Vue.use(Common)
Vue.use(Pc)
Vue.use(GlobalComponents)
Vue.use(myCommon)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
