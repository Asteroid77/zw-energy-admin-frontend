import { type AxiosError } from 'axios'
import { useRouter } from '@/hooks/router/useRouter.ts'
import type { CustomAxiosRequestConfig, ServerResponse } from '@/types/axios'
import { HttpStatusCode } from 'axios'
import { useRequestNotification } from '@/hooks/request/useRequestNotification.ts'
import { match } from 'ts-pattern'
import {
  useExceptionRecorder,
  useSimpleRequestExceptionDataBuilder,
} from '@/hooks/exception/useExceptionRecorder.ts'
import type { RequestExceptionExtra, ExceptionReport } from '@/types/exception'
import pkg from '../../../package.json'
/**
 * 对于服务端返回的轻微错误处理
 * @param {CustomAxiosRequestConfig} config 自定义axios配置
 * @param {AxiosError<ServerResponse<unknown>>} err 服务端异常响应体
 * @template D config.data的类型
 * @template E AxiosError<ServerResponse<E>>中的E类型
 */
export function useServerMinorErrorHandle<D = unknown, E = unknown>(
  config: CustomAxiosRequestConfig<D>,
  err: AxiosError<ServerResponse<E>>,
) {
  const status: number | undefined = err.response?.status
  if (status && status >= 400 && status < 500) {
    match(err.response?.status)
      .with(HttpStatusCode.Unauthorized, () => {
        //toast弹窗提示
        useRequestNotification(config, 'error', err.message)
        _useUnAuthorizedError()
      })
      .with(HttpStatusCode.BadRequest, () => {
        //toast弹窗提示
        useRequestNotification(config, 'error', err.message)
        _useBadRequestError<D, E>(config, err)
      })
    //TODO: 在layout中完成无网络提示
    match(err.code).when(
      (code) => code === 'ECONNABORTED',
      () => {},
    )
  }
}

/**
 * 未登录或登录过期处理
 */
function _useUnAuthorizedError() {
  //返回login页面
  useRouter().push('/login')
}

/**
 * 用户提交参数异常处理
 * @param {CustomAxiosRequestConfig} config 自定义axios配置
 * @param {AxiosError<ServerResponse<E>>} err 服务端异常响应体
 * @template D config.data的类型
 * @template E AxiosError<ServerResponse<E>>中泛型E的类型
 */
function _useBadRequestError<D = unknown, E = unknown>(
  config: CustomAxiosRequestConfig<D>,
  err: AxiosError<ServerResponse<E>>,
) {
  const data: ExceptionReport<RequestExceptionExtra<D, unknown>> =
    useSimpleRequestExceptionDataBuilder<D, E>(config, err)
  useExceptionRecorder(data)
}
