import type { I18NInfo } from '@/types/i18n'

const i18NInfo: I18NInfo = {
  common: {
    empty: '无',
    concluded: '已结束',
    status: '状态',
    createTime: '创建时间',
    updateTime: '更新时间',
    modifyTime: '修改时间',
    unknown: '未知',
    creator: '创建人',
    yes: '是',
    no: '否',
    sourceData: '原数据',
    approvalData: '审批数据',
    zwEnergy: '中网联合',
    success: '成功',
    notEmpty: '不能为空',
    error: '失败',
  },
  actions: {
    operate: '操作',
    approve: '审批',
    delete: '删除',
    accept: '受领',
    edit: '编辑',
    read: '查看',
    add: '新增',
    reset: '重置',
    search: '查询',
    modifyApproval: '修改审批',
    readApprovalItem: '查看审批项',
    submit: '提交',
    modify: '修改',
    cancel: '取消',
    return: '返回',
    send: '发送',
    login: '登录',
    confirm: '确定',
    forgetPassword: '忘记密码?',
    expand: '展开',
    close: '收起',
  },
  captcha: {
    sms: {
      success: {
        title: '短信发送成功',
      },
    },
  },
  exception: {
    title: '出现了一些小问题',
    ECONNABORTED: {
      content: '服务器异常',
      meta: '服务器应答超时，请稍后重试...',
    },
    ERR_NETWORK: {
      content: '服务异常',
      meta: '与服务器断开连接，请稍后重试',
    },
    default: {
      content: '未知异常',
      meta: '服务暂不可用，请稍后重试',
    },
    ERR_USER_NETWORK_NOTWORK: {
      content: '您的网络不可用',
      meta: '暂无法与服务器连接....',
    },
    '403': {
      title: '403 权限不足',
      description: '您没有权限访问该资源，或许该找管理员反馈一下？',
    },
    '404': {
      title: '404 资源不存在',
      description: '啊哦，你来到了一片荒原，跟管理员反馈一下？',
    },
    '418': {
      title: '出现了一些小问题',
      description: '请通过浏览器交互访问系统内部资源，不要直接键入地址访问',
    },
    incompatibility: {
      title: '糟糕！您的浏览器与站点存在兼容性问题',
      description: '或许您可以更换浏览器尝试(Chrome;Edge;Android9+;Ios12+等现代浏览器/WebView)',
    },
    unexpected: {
      title: '服务端异常',
      message: '请稍后重试或联系管理员',
      business: {
        title: '业务处理失败',
      },
    },
  },
  account: {
    password: {
      text: '密码',
      change: '修改密码',
      previous: '旧密码',
      regular: '密码由8~16个字符组成',
      minimum: '密码至少要有8位',
      maximum: '密码最长为16位',
      new: '新密码',
      confirm: {
        normal: {
          text: '请确认密码',
        },
        new: {
          text: '请确认新密码',
        },
      },
      dbCheck: {
        normal: {
          text: '再次确认密码',
          placeholder: '请再次确认密码',
        },
        new: {
          text: '再次确认新密码',
          placeholder: '请再次确认新密码',
        },
      },
    },
    verification: {
      text: '验证码',
      phone: '手机验证码',
    },
    invalidToken: {
      text: '当前登录凭证失效，请重新登录',
      meta: '3秒后返回登录页面...',
    },
    phone: {
      support: '目前仅支持+86大陆手机号',
      verify: '请填写手机号后再发送验证码',
    },
    return: '返回登录',
    login: {
      text: '登录',
      signIn: '没有 中网联合 账户?',
      signUp: '创建账户',
    },
    refresh: '看不清验证码时，可以点击验证码图案刷新',
    register: {
      text: '注册',
      type: {
        text: '注册类型',
        placeholder: '请选择您的注册类型',
      },
      haveAccount: '已有账号?',
      success: {
        text: '注册成功',
        meta: '完善您的资料，即可办理备案/签约业务',
      },
    },
    registerSuccess: '注册成功！',
    messages: '我的消息',
    theme: '主题调整',
    logout: '退出登录',
    logoutCheck: '确定登出吗?',
  },
  permission: {
    code: '权限代号',
    description: '权限描述',
  },
  role: {
    code: '角色代号',
    description: '角色描述',
    permission: '角色权限',
  },
  menu: {
    name: '菜单名称',
    type: '菜单类型',
    options: {
      primary: '一级菜单',
      sub: '子菜单',
      buttonOrPerm: '按钮/权限',
    },
    path: '前端路径',
    component: '前端组件名称',
    parent: '上级菜单',
    perms: '菜单权限',
    icon: '前端组件图标',
    display: '菜单是否显示',
    active: '菜单是否生效',
    sort: '菜单排序(越小排越前,最小为1)',
    delete: {
      includeSubMenu: '是否连同子菜单一起删除?',
      default: '确定删除该菜单？',
    },
  },
  notification: {
    time: '通知时间',
    placeholder: '请选择通知时间范围',
    retrieval: {
      text: '内容检索',
      placeholder: '请输入需要检索的内容',
    },
    list: '消息列表',
  },
  dict: {
    tabTitle: {
      setting: '字典设置',
      itemsSetting: '字典项设置',
    },
    code: '字典编码',
    description: '字典名称',
    category: {
      code: '字典分类编码',
      description: '字典分类说明',
    },
    sortNo: '排序编号',
    remark: '附加说明',
  },
  sign: {
    status: '签约状态',
    recorded: '备案',
    signed: '签约',
    expired: '已过期',
    companyName: '企业名称',
    industry: '行业',
    area: '地区',
    liaison: '联系人',
    liaisonPhone: '联系人电话',
    allocation: '电力分配',
    expiration: '合同到期时间',
    annual: '年用电量',
    capacity: '变压器容量',
    category: '用电类型',
    voltage: '电压等级',
    pricing: {
      peakValley: {
        enable: '是否执行尖峰平谷电价',
        peak: '尖',
        valley: '谷',
        flat: '平',
        offPeak: '峰',
        maximum: '值不能超过100',
        minimum: '值不能小于0',
        sumLimit: '与其它值的总和不能超过100%',
      },
      mode: '价格模式',
      type: {
        text: '价格类型',
        options: {
          power: '电厂侧',
          user: '用户侧',
          selling: '售电公司侧',
        },
      },
      sort: {
        type: '价格种类',
        options: {
          split: '分成类',
          minimum: '保底类',
          minimumWithSplit: '保底分成类',
          other: '其它',
        },
      },
      split: '分成比例',
      settled: {
        pricing: '固定价格',
        spread: '固定价差',
        unit: '元/兆瓦时',
      },
    },
    remark: {
      progress: '进度备注',
      other: '其它(备注)',
    },
    file: {
      scan: '合同扫描件(PDF或照片)',
      bill: '近一个月电费单',
    },
    tabs: {
      baseInfo: '基本信息',
      supplementaryInfoForSigned: '已补充签约信息',
      attachmentUpload: '附件上传',
      viewApprovalProgress: '查看审批进度',
    },
    marketing: {
      account: '营销户号',
      info: '营销户号信息',
      new: '添加营销户号信息',
    },
  },
}
export default i18NInfo
