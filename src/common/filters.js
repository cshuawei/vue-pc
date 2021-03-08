import { staticdata } from './staticdata'

const GlobalFilters = {
  install (Vue) {
    /**
     * 日期分割
     * @param v 源值 20190312102315
     */
    Vue.filter('dateSeparate', function (v, fromat, separator) {
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
    })
    /**
     * 任务类型
     * @param v 源值
     */
    Vue.filter('taskType', function (taskType, taskGroup, ticketId) {
      if (!taskGroup && !ticketId) {
        const find = staticdata.taskTypes.find(ele => ele.value === taskType) || {}
        return find.text || '--'
      }
      if (taskGroup === 'MAKE') {
        if (taskType === 'BY_FILE') {
          return ticketId ? '普通上传文件制码' : '组合上传文件制码'
        } else if (taskType === 'BY_TICKET') {
          return ticketId ? '普通券制码' : '组合券制码'
        } else {
          return '--'
        }
      } else if (taskGroup === 'DELAY') {
        if (taskType === 'BY_FILE') {
          return '上传文件延期'
        } else if (taskType === 'BY_BATTCH_NO') {
          return '按批次延期'
        } else {
          return '--'
        }
      } else if (taskGroup === 'VOID') {
        if (taskType === 'BY_FILE') {
          return '按文件作废'
        } else if (taskType === 'BY_BATTCH_NO') {
          return '按批次作废'
        } else {
          return '--'
        }
      } else {
        return '--'
      }
    })

    /**
     * 任务状态
     * @param v 源值
     */
    Vue.filter('taskStatus', function (v) {
      const find = staticdata.taskStatus.find(ele => ele.value === v) || {}
      return find.text || '--'
    })

    /**
     * 导码状态
     * @param v 源值
     */
    Vue.filter('exportStatus', function (v) {
      const find = staticdata.exportStatus.find(ele => ele.value === v) || {}
      return find.text || '--'
    })

    /**
     * 执行时长
     * @param v 源值(ms)
     */
    Vue.filter('runningTime', function (v) {
      if (typeof v === 'number') {
        const zeroFill = (num) => {
          num = num.toString()
          return num[1] ? num : '0' + num
        }
        const dayTime = v / 1000 / 60 / 60 / 24
        const day = Math.floor(dayTime)
        const hourTime = (dayTime - day) * 24
        const hour = Math.floor(hourTime)
        const minuteTime = (hourTime - hour) * 60
        const minute = Math.floor(minuteTime)
        const secondTime = (minuteTime - minute) * 60
        const second = Math.ceil(secondTime)
        return `${zeroFill(hour)}:${zeroFill(minute)}:${zeroFill(second)}`
      }
      return '--'
    })

    /**
     * 码开启时间
     * @param v 源值
     */
    Vue.filter('commissionDate', function (v) {
      const find = staticdata.commissionDates.find(ele => ele.value === v) || {}
      return find.text || '--'
    })
  }
}

export default GlobalFilters
