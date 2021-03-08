import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosConfig from '../axios.config'
import GlobalComponents from './components'
import vuetify from './plugins/vuetify'
import { Common, Pc } from 'vue-superset'
import myCommon from './common'
import './assets/css/common.css'

Vue.config.productionTip = false

Vue.use(Common)
Vue.use(Pc)
Vue.use(axiosConfig)
Vue.use(GlobalComponents)
Vue.use(myCommon)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
