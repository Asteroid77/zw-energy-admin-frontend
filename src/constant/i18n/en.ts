import type { I18NInfo } from '@/types/i18n'

const i18NInfo: I18NInfo = {
  common: {
    empty: 'None',
    concluded: 'Concluded',
    status: 'Status',
    createTime: 'Creation Time',
    updateTime: 'Update Time',
    modifyTime: 'Modification Time',
    unknown: 'Unknown',
    creator: 'Creator',
    yes: 'Yes',
    no: 'No',
    sourceData: 'Original Data',
    approvalData: 'Approval Data',
    zwEnergy: 'ZW United',
    success: 'Success',
    notEmpty: 'Cannot be empty',
  },
  actions: {
    operate: 'Operate',
    approve: 'Approve',
    delete: 'Delete',
    accept: 'Accept',
    edit: 'Edit',
    read: 'View',
    add: 'Add',
    reset: 'Reset',
    search: 'Search',
    modifyApproval: 'Modify Approval',
    readApprovalItem: 'View Approval Item',
    submit: 'Submit',
    modify: 'Modify',
    cancel: 'Cancel',
    return: 'Return',
    send: 'Send',
    login: 'Login',
    confirm: 'Confirm',
    forgetPassword: 'Forgot Password?',
    expand: 'Expand',
    close: 'Collapse',
  },
  exception: {
    title: 'There were some issues',
    ECONNABORTED: {
      content: 'Server Exception',
      meta: 'Server response timeout, please try again later...',
    },
    ERR_NETWORK: {
      content: 'Service Exception',
      meta: 'Disconnected from the server, please try again later',
    },
    default: {
      content: 'Unknown Exception',
      meta: 'Service temporarily unavailable, please try again later',
    },
    ERR_USER_NETWORK_NOTWORK: {
      content: 'Your network is unavailable',
      meta: 'Unable to connect to the server...',
    },
    403: {
      title: '403 Insufficient Permissions',
      description:
        'You do not have permission to access this resource. Maybe you should contact the administrator?',
    },
    404: {
      title: '404 Resource Not Found',
      description: 'Oops, you have reached a dead end. Maybe you should contact the administrator?',
    },
    418: {
      title: 'There were some issues',
      description:
        'Please access the internal system resources through the browser, not directly by typing the address',
    },
    incompatibility: {
      title: 'Oops! Your browser is incompatible with the site',
      description:
        'You may try switching to another browser (Chrome, Edge, Android 9+, iOS 12+, or other modern browsers/WebView)',
    },
  },
  account: {
    password: {
      text: 'Password',
      change: 'Change Password',
      previous: 'Old Password',
      regular: 'Password should be 8~16 characters long',
      minimum: 'Password must have at least 8 characters',
      maximum: 'Password can be a maximum of 16 characters',
      new: 'New Password',
      confirm: {
        normal: {
          text: 'Please confirm your password',
        },
        new: {
          text: 'Please confirm the new password',
        },
      },
      dbCheck: {
        normal: {
          text: 'Confirm Password Again',
          placeholder: 'Please confirm the password again',
        },
        new: {
          text: 'Confirm New Password Again',
          placeholder: 'Please confirm the new password again',
        },
      },
    },
    verification: {
      text: 'Verification Code',
      phone: 'Phone Verification Code',
    },
    invalidToken: {
      text: 'Your login token has expired, please log in again',
      meta: 'Returning to login page in 3 seconds...',
    },
    phone: {
      support: 'Currently only supports +86 Mainland China phone numbers',
      verify: 'Please fill in your phone number before sending the verification code',
    },
    return: 'Return to Login',
    login: {
      text: 'Login',
      signIn: "Don't have a Zhongwang United account?",
      signUp: 'Create an Account',
    },
    refresh: 'Click the captcha image to refresh if you cannot read the code clearly',
    register: {
      text: 'Register',
      type: {
        text: 'Registration Type',
        placeholder: 'Please select your registration type',
      },
      haveAccount: 'Already have an account?',
      success: {
        text: 'Registration Successful',
        meta: 'Complete your information to proceed with filing/signing business',
      },
    },
    registerSuccess: 'Registration Successful!',
    messages: 'My Messages',
    theme: 'Theme Adjustment',
    logout: 'Logout',
    logoutCheck: 'Are you sure you want to log out?',
  },
  permission: {
    code: 'Permission Code',
    description: 'Permission Description',
  },
  role: {
    code: 'Role Code',
    description: 'Role Description',
    permission: 'Role Permissions',
  },
  menu: {
    name: 'Menu Name',
    type: 'Menu Type',
    options: {
      primary: 'Primary Menu',
      sub: 'Sub Menu',
      buttonOrPerm: 'Button/Permission',
    },
    path: 'Frontend Path',
    component: 'Frontend Component Name',
    parent: 'Parent Menu',
    perms: 'Menu Permissions',
    icon: 'Frontend Component Icon',
    display: 'Menu Visibility',
    active: 'Menu Activity',
    sort: 'Menu Sort Order (lower numbers appear first, minimum 1)',
    delete: {
      includeSubMenu: 'Delete the submenu as well?',
      default: 'Are you sure you want to delete this menu?',
    },
  },
  notification: {
    time: 'Notification Time',
    placeholder: 'Please select the notification time range',
    retrieval: {
      text: 'Content Search',
      placeholder: 'Please enter the content to search',
    },
    list: 'Message List',
  },
  dict: {
    tabTitle: {
      setting: 'Dictionary Settings',
      itemsSetting: 'Dictionary Item Settings',
    },
    code: 'Dictionary Code',
    description: 'Dictionary Name',
    category: {
      code: 'Dictionary Category Code',
      description: 'Dictionary Category Description',
    },
    sortNo: 'Sort Number',
    remark: 'Additional Notes',
  },
  sign: {
    status: 'Signing Status',
    recorded: 'Filed',
    signed: 'Signed',
    expired: 'Expired',
    companyName: 'Company Name',
    industry: 'Industry',
    area: 'Area',
    liaison: 'Contact Person',
    liaisonPhone: 'Contact Person Phone',
    allocation: 'Power Allocation',
    expiration: 'Contract Expiration Time',
    annual: 'Annual Power Consumption',
    capacity: 'Transformer Capacity',
    category: 'Electricity Type',
    voltage: 'Voltage Level',
    pricing: {
      peakValley: {
        enable: 'Is Peak-Valley Electricity Pricing Enabled?',
        peak: 'Peak',
        valley: 'Valley',
        flat: 'Flat',
        offPeak: 'Off-Peak',
        maximum: 'Value cannot exceed 100',
        minimum: 'Value cannot be less than 0',
        sumLimit: 'The sum of other values cannot exceed 100%',
      },
      mode: 'Pricing Mode',
      type: {
        text: 'Pricing Type',
        options: {
          power: 'Power Plant Side',
          user: 'User Side',
          selling: 'Selling Company Side',
        },
      },
      sort: {
        type: 'Pricing Category',
        options: {
          split: 'Split Type',
          minimum: 'Minimum Type',
          minimumWithSplit: 'Minimum with Split Type',
          other: 'Other',
        },
      },
      split: 'Split Ratio',
      settled: {
        pricing: 'Fixed Price',
        spread: 'Fixed Spread',
        unit: 'Yuan/MWh',
      },
    },
    remark: {
      progress: 'Progress Notes',
      other: 'Other (Remarks)',
    },
    file: {
      scan: 'Contract Scan (PDF or Photo)',
      bill: 'Electricity Bill for the Last Month',
    },
    tabs: {
      baseInfo: 'Basic Information',
      supplementaryInfoForSigned: 'Supplementary Info for Signed',
      attachmentUpload: 'Attachment Upload',
      viewApprovalProgress: 'View Approval Progress',
    },
    marketing: {
      account: 'Marketing Account Number',
      info: 'Marketing Account Information',
      new: 'Add Marketing Account Information',
    },
  },
}
export default i18NInfo
