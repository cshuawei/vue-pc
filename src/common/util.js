export default {
  /**
   * 获取appId
   * @param env 环境变量
   */
  getAppId () {
    const env = process.env.NODE_ENV
    if (env === 'mock') {
      return 'paas-app-admin'
    } else if (env === 'release' || env === 'uat') {
      return 'ebuy8a8c2b8fc849'
    } else if (env === 'production') {
      return 'ebuyprd100100100'
    } else {
      return 'ebuydev100100100'
    }
  },
  /**
   * 日期分割
   * @param v 源值 20190312102315
   */
  dateSeparate (v, fromat, separator) {
    if (v) {
      const vstr = v.toString()
      const year = vstr.substr(0, 4)
      const month = vstr.substr(4, 2)
      const day = vstr.substr(6, 2)
      const hour = vstr.substr(8, 2)
      const minute = vstr.substr(10, 2)
      const second = vstr.substr(12, 2)
      const s = separator || '-'
      if (fromat === 'ymd') {
        return `${year}${s}${month}${s}${day}`
      } else if (fromat === 'hms') {
        return `${hour}:${minute}:${second}`
      } else if (fromat === 'ymdhms') {
        return `${year}${s}${month}${s}${day} ${hour}:${minute}:${second}`
      }
      return '--'
    }
    return '--'
  }
}
