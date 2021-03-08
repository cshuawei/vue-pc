// 全局加载组件
import { ValidationProvider, ValidationObserver } from 'vee-validate'

// 自定义组件
import ViewSkeleton from './ViewSkeleton'
import SideBarSet from './SideBarSet'
import UxDatePicker from './UxDatePicker'
import UxTimePicker from './UxTimePicker'
import UxDateRange from './UxDateRange'
import UxSearchBar from './UxSearchBar'
import UxColorPicker from './UxColorPicker'
import UxTreeview from './UxTreeview'
import UxMore from './UxMore'

export default {
  install (Vue) {
    Vue.component('ValidationProvider', ValidationProvider)
    Vue.component('ValidationObserver', ValidationObserver)
    Vue.component('UxDatePicker', UxDatePicker)
    Vue.component('UxTimePicker', UxTimePicker)
    Vue.component('UxDateRange', UxDateRange)
    Vue.component('UxSearchBar', UxSearchBar)
    Vue.component('ViewSkeleton', ViewSkeleton)
    Vue.component('UxMore', UxMore)
  }
}

export {
  SideBarSet,
  UxColorPicker,
  UxTreeview
}
