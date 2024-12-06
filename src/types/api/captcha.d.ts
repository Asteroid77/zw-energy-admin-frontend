/**
 * 获取普通校验码服务端响应体
 */
declare interface CaptchaResponse {
  /** 校验码（无实际意义） */
  code: ''
  /** 校验码对应图片 */
  image: string
  /** 该校验码对应的唯一key */
  key: string
}
/**
 * 发送手机验证码服务端响应体
 */
declare interface SMSSendResponse {
  /** 验证码bizId */
  bizId: string
  /** 单次验证码发送时间限制剩余时间 */
  restSeconds: number
  /** 手机号 */
  phone: string
}
