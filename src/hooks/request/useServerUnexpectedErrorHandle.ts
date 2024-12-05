import type { CustomAxiosRequestConfig, ServerResponse } from '@/types/axios'
import type { AxiosError } from 'axios'
import {
  useConfigNotificationHandle,
  useRequestNotification,
} from '@/hooks/request/useRequestNotification.ts'
import { match } from 'ts-pattern'
import { HttpStatusCode } from 'axios'
import { useI18N } from '@/hooks/i18n/useI18N.ts'
import type { RequestExceptionExtra, ExceptionReport } from '@/types/exception'
import pkg from '../../../package.json'
import { useExceptionRecorder } from '@/hooks/exception/useExceptionRecorder.ts'

/**
 * 对于服务端返回的异常错误处理
 * @param {CustomAxiosRequestConfig} config
 * @param {AxiosError<ServerResponse<unknown>>} err
 */
export function useServerUnexpectedErrorHandle<D = unknown, E = unknown>(
  config: CustomAxiosRequestConfig<D>,
  err: AxiosError<ServerResponse<E>>,
) {
  const $t = useI18N()
  /**
   * 对于预期外的错误，服务端返回的message不应直接展现给用户。
   */
  const status = err.status
  if (status && status >= 500) {
    useRequestNotification(
      config,
      'error',
      $t('exception.unexpected.message'),
      $t('exception.unexpected.title'),
    )
    const data: ExceptionReport<RequestExceptionExtra<D, unknown>> = {
      type: 'server',
      level: 'fatal',
      timestamp: new Date().getTime(),
      message: err.message,
      stack: undefined,
      tags: {
        version: pkg.version,
        branch: import.meta.env.VITE_GIT_BRANCH,
        commit: import.meta.env.VITE_GIT_COMMIT,
      },
      extra: {
        params: config.params,
        data: config.data,
        method: config.method || 'get',
        url: config.url,
        headers: config.headers,
      },
    }
    useExceptionRecorder(data)
  }
}
