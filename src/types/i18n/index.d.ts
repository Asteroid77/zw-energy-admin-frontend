import type { I18nOptions, ComposerTranslation } from 'vue-i18n'

/**
 * I18n服务的所有键与值类型
 */
export interface I18NInfo {
  [key: string]: Record<string, unknown> | string
  common: {
    empty: string
    concluded: string
    status: string
    createTime: string
    updateTime: string
    modifyTime: string
    unknown: string
    creator: string
    yes: string
    no: string
    sourceData: string
    approvalData: string
    zwEnergy: string
    success: string
    error: string
    notEmpty: string
  }
  actions: {
    operate: string
    approve: string
    delete: string
    accept: string
    edit: string
    read: string
    add: string
    reset: string
    search: string
    modifyApproval: string
    readApprovalItem: string
    submit: string
    modify: string
    cancel: string
    return: string
    send: string
    login: string
    confirm: string
    forgetPassword: string
    expand: string
    close: string
  }
  captcha: {
    sms: {
      success: {
        title: string
      }
    }
  }
  exception: {
    title: string
    ECONNABORTED: {
      content: string
      meta: string
    }
    ERR_NETWORK: {
      content: string
      meta: string
    }
    default: {
      content: string
      meta: string
    }
    ERR_USER_NETWORK_NOTWORK: {
      content: string
      meta: string
    }
    403: {
      title: string
      description: string
    }
    404: {
      title: string
      description: string
    }
    418: {
      title: string
      description: string
    }
    incompatibility: {
      title: string
      description: string
    }
    unexpected: {
      title: string
      message: string
      business: {
        title: string
      }
    }
  }
  permission: {
    code: string
    description: string
  }
  role: {
    code: string
    description: string
    permission: string
  }
  menu: {
    name: string
    type: string
    options: {
      primary: string
      sub: string
      buttonOrPerm: string
    }
    path: string
    component: string
    parent: string
    perms: string
    icon: string
    display: string
    active: string
    sort: string
    delete: {
      includeSubMenu: string
      default: string
    }
  }
  account: {
    password: {
      text: string
      change: string
      previous: string
      regular: string
      minimum: string
      maximum: string
      new: string
      confirm: {
        normal: {
          text: string
        }
        new: {
          text: string
        }
      }
      dbCheck: {
        normal: {
          text: string
          placeholder: string
        }
        new: {
          text: string
          placeholder: string
        }
      }
    }
    verification: {
      text: string
      phone: string
    }
    invalidToken: {
      text: string
      meta: string
    }
    phone: {
      support: string
      verify: string
    }
    return: string
    login: {
      text: string
      signIn: string
      signUp: string
    }
    refresh: string
    register: {
      text: string
      type: {
        text: string
        placeholder: string
      }
      haveAccount: string
      success: {
        text: string
        meta: string
      }
    }
    registerSuccess: string
    messages: string
    theme: string
    logout: string
    logoutCheck: string
  }
  notification: {
    time: string
    placeholder: string
    retrieval: {
      text: string
      placeholder: string
    }
    list: string
  }
  dict: {
    tabTitle: {
      setting: string
      itemsSetting: string
    }
    code: string
    description: string
    category: {
      code: string
      description: string
    }
    sortNo: string
    remark: string
  }
  sign: {
    status: string
    recorded: string
    signed: string
    expired: string
    companyName: string
    industry: string
    area: string
    liaison: string
    liaisonPhone: string
    allocation: string
    expiration: string
    annual: string
    capacity: string
    category: string
    voltage: string
    pricing: {
      peakValley: {
        enable: string
        peak: string
        valley: string
        flat: string
        offPeak: string
        maximum: string
        minimum: string
        sumLimit: string
      }
      mode: string
      type: {
        text: string
        options: {
          power: string
          user: string
          selling: string
        }
      }
      sort: {
        type: string
        options: {
          split: string
          minimum: string
          minimumWithSplit: string
          other: string
        }
      }
      split: string
      settled: {
        pricing: string
        spread: string
        unit: string
      }
    }
    remark: {
      progress: string
      other: string
    }
    file: {
      scan: string
      bill: string
    }
    tabs: {
      baseInfo: string
      supplementaryInfoForSigned: string
      attachmentUpload: string
      viewApprovalProgress: string
    }
    marketing: {
      account: string
      info: string
      new: string
    }
  }
}

/**
 * I18N目前支持的两种语言
 * - `zh-CN`: 中文
 * - `en`: 英文
 */
export type I18NLanguage = 'zh-CN' | 'en'
/**
 * 项目使用的I18N实例类型
 */
export type I18NComposerTranslation = ComposerTranslation<
  { 'zh-CN': I18NInfo; en: I18NInfo },
  'zh-CN' | 'en'
>
