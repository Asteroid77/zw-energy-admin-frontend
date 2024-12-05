import { useRequest } from '@/hooks/request/useRequest.ts'

/**
 * 普通验证码接口
 */
export function queryCaptcha(): Promise<CaptchaResponse> {
  return useRequest<CaptchaResponse, undefined>({
    method: 'GET',
    url: '/captcha',
    notify: {
      success: false,
    },
  })
}
