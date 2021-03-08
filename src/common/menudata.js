export default {
  home: [
    {
      icon: 'mdi-chart-bar',
      title: 'PAAS使用概况',
      path: '/home/usageOverview'
    },
    {
      icon: 'mdi-progress-clock',
      title: '待办任务',
      path: '/'
    }
  ],
  dataCentre: [
    {
      icon: 'mdi-monitor-screenshot',
      title: '数据大屏',
      path: '/'
    },
    {
      icon: 'mdi-credit-card-outline',
      title: '交易记录',
      active: false,
      children: [
        {
          id: 'CT',
          title: '消费交易',
          path: '/'
        },
        {
          id: 'RT',
          title: '退款交易',
          path: '/'
        }
      ]
    },
    {
      icon: 'mdi-ticket-percent',
      title: '电子券4.0数据',
      active: false,
      children: [
        {
          id: 'ET',
          title: '电子核销统计',
          path: '/dataCentre/expendStatistics'
        },
        {
          id: 'ER',
          title: '券码核销记录查询',
          path: '/dataCentre/expendRecordQuery'
        },
        {
          id: 'UR',
          title: '券码撤销记录查询',
          path: '/dataCentre/undoRecordQuery'
        }
      ]
    },
    {
      icon: 'mdi-microsoft-sharepoint',
      title: '转赠及领取记录',
      path: '/dataCentre/transferReceiveRecord'
    },
    {
      icon: 'mdi-clipboard-text',
      title: '订单列表',
      path: '/'
    }
  ],
  serviceMgt: [
    {
      icon: 'mdi-alpha-s-circle-outline',
      title: '服务管理',
      active: false,
      children: [
        {
          id: 'HU',
          title: '如何使用',
          path: '/'
        },
        {
          id: 'CS',
          title: '创建服务',
          path: '/'
        },
        {
          id: 'SC',
          title: '服务中心',
          path: '/'
        },
        {
          id: 'SP',
          title: '服务提供商',
          path: '/'
        }
      ]
    },
    {
      icon: 'mdi-alpha-t-circle-outline',
      title: '租户服务',
      active: false,
      children: [
        {
          id: 'BM',
          title: '品牌商户',
          path: '/'
        },
        {
          id: 'PT',
          title: '合作方',
          path: '/'
        },
        {
          id: 'PT',
          title: '租户服务列表',
          path: '/'
        },
        {
          id: 'TAL',
          title: '租户应用列表',
          path: '/'
        }
      ]
    }
  ],
  ecoupon4: [
    {
      icon: 'mdi-receipt',
      title: '电子券活动管理',
      path: '/ecoupon4/ECactivityMgt'
    },
    {
      icon: 'mdi-cash-usd',
      title: '电子券产品管理',
      path: '/ecoupon4/ECproductMgt'
    },
    {
      icon: 'mdi-view-compact',
      title: '4.0券模板管理',
      active: false,
      children: [
        {
          id: 'CT',
          title: '创建4.0券模板',
          path: '/ecoupon4/couponTplMgt'
        },
        {
          id: 'TM',
          title: '4.0券模板列表',
          path: '/ecoupon4/couponTplMgt/couponTplList'
        }
      ]
    },
    {
      icon: 'mdi-passport-biometric',
      title: '电子凭证查询',
      path: '/ecoupon4/evoucherInquiry'
    },
    {
      icon: 'mdi-file-table',
      title: '电子券任务管理',
      active: false,
      children: [
        {
          id: 'TM',
          title: '任务管理',
          path: '/ecoupon4/ECtaskMgt'
        },
        {
          id: 'BC',
          title: '批量制码',
          path: '/ecoupon4/ECtaskMgt/batchCoding'
        },
        {
          id: 'BE',
          title: '批量延期',
          path: '/ecoupon4/ECtaskMgt/batchExtension'
        },
        {
          id: 'BI',
          title: '批量作废',
          path: '/ecoupon4/ECtaskMgt/batchInvalidation'
        }
      ]
    },
    {
      icon: 'mdi-clipboard-file',
      title: '制码订单管理',
      path: '/ecoupon4/codedOrderMgt'
    },
    {
      icon: 'mdi-clipboard-arrow-left',
      title: '制码方管理',
      path: '/'
    },
    {
      icon: 'mdi-clipboard-arrow-right',
      title: '发码方管理',
      path: '/'
    },
    {
      icon: 'mdi-cash-multiple',
      title: '对账中心',
      path: '/'
    }
  ],
  valueCard: [],
  memberCenter: [
    {
      icon: 'mdi-account-group',
      title: '会员列表',
      path: '/'
    },
    {
      icon: 'mdi-math-log',
      title: '登录日志',
      path: '/'
    }
  ]
}
