/**
 * @param {display} 根据流程判断显示逻辑
 */
const processCtrl = (display) => {
  let development = false
  const href = window.location.href
  if (href.indexOf('http://localhost') >= 0) {
    development = true
  } else {
    development = false
  }
  try {
    if (!development) {
      if (typeof display !== 'boolean') {
        throw new Error('$process入参不正确')
      }
      return display
    }
    return true
  } catch (err) {
    console.error(err)
  }
}

export default {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          processCtrl
        }
      }
    })
    Object.defineProperty(Vue.prototype, '$process', {
      get () {
        return this.$root.processCtrl
      }
    })
  }
}
