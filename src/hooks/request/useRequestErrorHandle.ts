import type {
  CustomAxiosRequestConfig,
  RequestTimeStampRecorder,
  ServerResponse,
} from '@/types/axios'
import { useRequestNotification } from '@/hooks/request/useRequestNotification.ts'
import { match } from 'ts-pattern'
import { type AxiosError, HttpStatusCode } from 'axios'
import { useServerMinorErrorHandle } from '@/hooks/request/useServerMinorErrorHandle.ts'
import { useServerUnexpectedErrorHandle } from '@/hooks/request/useServerUnexpectedErrorHandle.ts'
import { useI18N } from '@/hooks/i18n/useI18N.ts'
import {
  useExceptionRecorder,
  useSimpleRequestExceptionDataBuilder,
} from '@/hooks/exception/useExceptionRecorder.ts'

/**
 * 服务器返回错误时处理
 * @param {CustomAxiosRequestConfig} config 自定义请求配置
 * @param {AxiosError<ServerResponse<unknown>>} err 服务端返回的错误响应体
 * @param {RequestTimeStampRecorder} stamp 记录请求开始与结束的时间戳对象
 */
export function useRequestServerErrorHandle(
  config: CustomAxiosRequestConfig,
  err: AxiosError<ServerResponse<unknown>>,
  stamp: RequestTimeStampRecorder,
) {
  //无需错误记录的预料内错误处理
  useServerMinorErrorHandle(config, err)
  //无法预见的严重服务端异常处理
  useServerUnexpectedErrorHandle(config, err)
}

/**
 * 服务端返回业务错误时处理
 * @param {CustomAxiosRequestConfig} config 自定义请求配置
 * @param {ServerResponse<unknown>} result 服务端响应体
 * @param {RequestTimeStampRecorder} stamp 记录请求开始与结束的时间戳对象
 */
export function useRequestBusinessErrorHandle<D = unknown, E = unknown, P = unknown>(
  config: CustomAxiosRequestConfig<D>,
  result: ServerResponse<E>,
  stamp: RequestTimeStampRecorder,
) {
  // 业务异常时toast弹窗提示
  useRequestNotification(
    config,
    'error',
    result.message,
    useI18N()('exception.unexpected.business.title'),
  )
  const exceptionReport = useSimpleRequestExceptionDataBuilder(config, result)
  useExceptionRecorder(exceptionReport)
}
