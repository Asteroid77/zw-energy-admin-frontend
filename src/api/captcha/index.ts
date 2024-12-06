import { useRequest } from '@/hooks/request/useRequest.ts'
import { useI18N } from '@/hooks/i18n/useI18N.ts'

/**
 * 普通验证码接口
 */
export function getCaptcha(): Promise<CaptchaResponse> {
  return useRequest<CaptchaResponse, undefined>({
    method: 'GET',
    url: '/captcha',
    notify: {
      success: false,
    },
  })
}
/**
 * 手机验证码接口
 */
export function sendSMS(phone: string) {
  return useRequest<SMSSendResponse, string>({
    method: 'POST',
    url: '/sms',
    data: phone,
    notify: {
      success: { title: useI18N()('captcha.sms.success.title'), type: 'notification' },
    },
  })
}
