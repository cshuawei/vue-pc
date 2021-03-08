const staticdata = {
  pageSize: 10,
  pageSizeOptions: [5, 10, 25, 50],
  autocompleteSize: 50,
  commissionDates: [
    { text: '当日', value: '0' },
    { text: '次日', value: '1' },
    { text: '不激活', value: '-1' }
  ],
  codingTypes: [
    { text: '按文件', value: 'BY_FILE' },
    { text: '按产品', value: 'BY_TICKET' }
  ],
  delayTypes: [
    { text: '按文件', value: 'BY_FILE' },
    { text: '按批次', value: 'BY_BATTCH_NO' }
  ],
  voidTypes: [
    { text: '按文件', value: 'BY_FILE' },
    { text: '按批次', value: 'BY_BATTCH_NO' }
  ],
  taskTypes: [ // 任务类型
    {
      text: '按文件',
      value: 'BY_FILE'
    },
    {
      text: '按产品',
      value: 'BY_TICKET'
    },
    {
      text: '按批次',
      value: 'BY_BATTCH_NO'
    }
  ],
  taskStatus: [ // 任务状态
    {
      text: '执行中',
      value: '0'
    },
    {
      text: '部分成功',
      value: '1'
    },
    {
      text: '任务成功',
      value: '2'
    },
    {
      text: '任务失败',
      value: '3'
    },
    {
      text: '审批中',
      value: '4'
    }
  ],
  exportStatus: [ // 导码状态
    {
      text: '执行中',
      value: '0'
    },
    {
      text: '导出成功',
      value: '2'
    },
    {
      text: '导出失败',
      value: '3'
    }
  ]
}

export default {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          staticdata
        }
      }
    })
    Object.defineProperty(Vue.prototype, '$staticdata', {
      get () {
        return this.$root.staticdata
      }
    })
  }
}

export {
  staticdata
}
