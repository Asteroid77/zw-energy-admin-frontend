import type {
  CustomAxiosRequestConfig,
  MessageStructure,
  Notify,
  RequestNotificationStatus,
  RequestNotificationType,
} from '@/types/axios'
import { useI18N } from '@/hooks/i18n/useI18N.ts'
import { useToast } from 'primevue'
import type { I18NComposerTranslation } from '@/types/i18n'
import { match } from 'ts-pattern'
const $t: I18NComposerTranslation = useI18N()

/**
 * 从CustomAxiosRequestConfig的notify属性中提取出原有内容
 * @param {CustomAxiosRequestConfig} cfg 自定义axios配置文件
 * @param {RequestNotificationStatus} type 类型
 * @param {keyof MessageStructure} key 需要提取的属性
 */
function _contentExtract(
  cfg: CustomAxiosRequestConfig,
  type: RequestNotificationStatus,
  key: keyof MessageStructure,
): string | boolean | undefined {
  if (typeof cfg.notify === 'object') {
    if (typeof cfg.notify[type] === 'object') {
      return cfg.notify[type][key]
    }
  }
  return undefined
}

/**
 * 获取请求后提醒toast所需配置
 * @param {CustomAxiosRequestConfig} cfg 自定义axios配置
 * @param {RequestNotificationStatus} type success | error
 * @param defaultTitle 默认title
 * @param defaultMessage 默认message
 */
function _getNotificationConfig(
  cfg: CustomAxiosRequestConfig,
  type: RequestNotificationStatus,
  defaultTitle: string,
  defaultMessage: string,
): MessageStructure {
  return {
    type: (_contentExtract(cfg, type, 'type') as RequestNotificationType) || 'notification',
    title: (_contentExtract(cfg, type, 'title') as string) || defaultTitle,
    message: (_contentExtract(cfg, type, 'message') as string) || defaultMessage,
    trigger: (_contentExtract(cfg, type, 'trigger') as boolean) ?? true,
  }
}

/**
 * 处理用户传递的CustomAxiosRequestConfig中的notify项
 * @param {CustomAxiosRequestConfig} config 自定义axios配置
 * @param {string} message 服务端返回的message
 * @param {string} title toast title
 * @return {Notify}
 */
export function useConfigNotificationHandle(
  config: CustomAxiosRequestConfig,
  message: string,
  title?: string,
): Notify {
  return {
    success: _getNotificationConfig(config, 'success', title || $t('common.success'), message),
    error: _getNotificationConfig(config, 'error', title || $t('common.error'), message),
  }
}

/**
 * 请求结束时toast弹窗提示
 * @param {CustomAxiosRequestConfig} config 自定义请求配置
 * @param {RequestNotificationStatus} type toast提示类型
 * @param {string} message toast message
 * @param {string} title toast title
 */
export function useRequestNotification(
  config: CustomAxiosRequestConfig,
  type: RequestNotificationStatus,
  message: string,
  title?: string,
): void {
  const notificationConfiguration: Notify = useConfigNotificationHandle(config, message, title)
  const cfg: MessageStructure = notificationConfiguration[type]
  useToast().add({ severity: type, summary: cfg.title, detail: cfg.message, life: 1500 })
}
