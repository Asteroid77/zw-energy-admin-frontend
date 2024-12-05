import type { CustomAxiosRequestConfig, ServerResponse } from '@/types/axios'
import type { AxiosResponse, AxiosError, AxiosInstance } from 'axios'
import { useRequestNotification } from '@/hooks/request/useRequestNotification.ts'
import { match } from 'ts-pattern'
import { useAxios } from '@/hooks/axios/useAxios.ts'
import {
  useRequestBusinessErrorHandle,
  useRequestServerErrorHandle,
} from '@/hooks/request/useRequestErrorHandle.ts'

/**
 * 原始请求封装(unWrapper为true时)
 * @param {CustomAxiosRequestConfig<D>} config 自定义axios请求配置
 * @param {unknown[]} queryKey 请求key
 * @template T 返回值类型
 * @template D 发起请求时服务端所需参数类型
 * @return {Promise<T>}
 */
export function useRequest<T, D = unknown>(
  config: CustomAxiosRequestConfig<D> & { unWrapper?: true },
  queryKey?: unknown[],
): Promise<T>
/**
 * 原始请求封装(unWrapper为false时)
 * @param {CustomAxiosRequestConfig<D>} config 自定义axios请求配置
 * @param {unknown[]} queryKey 请求key
 * @template T 返回值
 * @template D 发起请求时服务端所需参数类型
 * @return {Promise<AxiosResponse<ServerResponse<T>>>}
 */
export function useRequest<T, D = unknown>(
  config: CustomAxiosRequestConfig<D> & { unWrapper?: false },
  queryKey?: unknown[],
): Promise<AxiosResponse<ServerResponse<T>>>
/**
 * 原始请求封装
 * @param {CustomAxiosRequestConfig<D>} config 自定义axios请求配置
 * @param {unknown[]} queryKey 请求key
 * @template T 返回值
 * @template D 发起请求时服务端所需参数类型
 * @return {Promise<T | AxiosResponse<ServerResponse<T>, D>>}
 */
export async function useRequest<T, D = unknown>(
  config: CustomAxiosRequestConfig<D>,
  queryKey?: unknown[],
): Promise<T | AxiosResponse<ServerResponse<T>, D>> {
  if (!queryKey) {
    queryKey = [config.url]
  }
  //请求开始时间
  const fetchStartTimestamp = new Date()
  console.log(`Request starting at ${fetchStartTimestamp},queryKey:${queryKey}`)
  //params
  console.log(`params`, config.params, 'data', config.data)
  //data
  console.log('token', config.headers?.satoken)
  try {
    const req: AxiosInstance = useAxios()
    const data: AxiosResponse<ServerResponse<T>> = await req<
      ServerResponse<T>,
      AxiosResponse<ServerResponse<T>>,
      D
    >(config)
    const result: ServerResponse<T> = data.data
    const fetchEndTimestamp = new Date()
    console.log(`Request ending at ${fetchEndTimestamp}, queryKey: ${queryKey}`)
    const matchResult = match(result.code)
      .when(
        (code) => code.toLowerCase().includes('error'),
        () => {
          // 业务异常处理
          useRequestBusinessErrorHandle<D>(config, result, {
            start: fetchStartTimestamp,
            end: fetchEndTimestamp,
          })
          return false
        },
      )
      .otherwise(() => true)
    //接口请求成功后
    if (matchResult) {
      // 成功时toast弹窗提示
      useRequestNotification(config, 'success', result.message)
    }
    // 返回值处理
    return match(config.unWrapper)
      .with(true, undefined, () => {
        return result.result
      })
      .with(false, () => {
        return data
      })
      .exhaustive()
  } catch (err) {
    const fetchEndTimestamp = new Date()
    const error = err as AxiosError<ServerResponse<unknown>>
    // 服务端错误处理
    useRequestServerErrorHandle(config, error, {
      start: fetchStartTimestamp,
      end: fetchEndTimestamp,
    })
    // 抛出异常给Promise接收方
    throw error
  }
}
