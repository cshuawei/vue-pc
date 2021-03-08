import Staticdata from './staticdata'
import Filters from './filters'
import Util from './util'
import Process from './process'
import Menu from './menudata'

export default {
  install (Vue) {
    Vue.use(Staticdata)
    Vue.use(Filters)
    Vue.use(Process)
  }
}

export {
  Util,
  Menu
}
