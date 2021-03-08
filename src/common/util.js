import axios from 'axios'
export default {
  /*
   * 打开浏览器窗口
   * @url 指定的页面的URL
   * @target 指定target属性或窗口的名称  _blank _parent _self _top
  */
  windowOpen (url, target) {
    window.open(url, target || '_blank')
  },
  /**
   * 模板下载
   * @param templateName 模板名称
   */
  downloadTpl (templateName) {
    const a = axios.defaults.baseURL
    const b = a.split('/app/')
    const baseUrl = b[0] + '/download/admin'
    this.windowOpen(`${baseUrl}/getTemplate?templateName=${templateName}`)
  },
  /**
   * 下载
   * @param filePath
   */
  download (filePath) {
    return new Promise((resolve, reject) => {
      const a = axios.defaults.baseURL
      const b = a.split('/app/')
      const baseURL = b[0] + '/download/' + b[1]
      const instance = axios.create({
        baseURL,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
      instance({
        method: 'get',
        url: '/getFile?fileName=' + filePath,
        responseType: 'blob'
      }).then(res => {
        if (res.status === 200) {
          const idx = filePath.lastIndexOf('/')
          const fileName = filePath.slice(idx + 1)
          const downloadElement = document.createElement('a')
          const href = window.URL.createObjectURL(res.data) // 创建下载的链接
          downloadElement.style.display = 'none'
          downloadElement.href = href
          downloadElement.download = fileName // 下载后文件名
          document.body.appendChild(downloadElement)
          downloadElement.click() // 点击下载
          document.body.removeChild(downloadElement) // 下载完成移除元素
        }
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 上传
   * @param url 请求地址
   * @param files 文件信息 File 对象
   */
  upload (url, files) {
    return new Promise((resolve, reject) => {
      const a = axios.defaults.baseURL
      const b = a.split('/app/')
      const baseURL = b[0] + '/upload/admin'
      const instance = axios.create(
        {
          baseURL,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      const formData = new FormData()
      if (files.length) { // 多文件
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          formData.append('file', file)
        }
      } else { // 单文件
        formData.append('file', files)
      }
      instance({
        method: 'post',
        url,
        data: formData
      }).then(res => {
        if (res.status === 200) {
          // 接口通了
          const d = res.data
          resolve(d)
        } else {
          /* eslint-disable no-console */
          console.error(
            'status:' + res.status,
            'statusText:' + res.statusText
          )
        }
      }).catch(err => {
        reject(err)
        /* eslint-disable no-console */
        console.error(err)
      })
    })
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
