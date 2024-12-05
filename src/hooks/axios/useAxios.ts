import axios, { type AxiosInstance, type CreateAxiosDefaults, type AxiosHeaderValue } from 'axios'
const axiosDefaultOptions: CreateAxiosDefaults = {
  timeout: 10000,
  baseURL: import.meta.env.VITE_BACKEND_SERVER_URL,
}
_defaultOptionHeadersAssign('satoken', localStorage.getItem('ACCESS_TOKEN'))
const axiosInstance: AxiosInstance = axios.create(axiosDefaultOptions)

/**
 * 使用axios功能
 * @return {AxiosInstance}
 */
export function useAxios(): AxiosInstance {
  return axiosInstance
}

/**
 * 设置默认axios配置中的headers key以及value
 * @param {string} key 键
 * @param {AxiosHeaderValue} value 值
 */
function _defaultOptionHeadersAssign(key: string, value: AxiosHeaderValue) {
  if (value !== undefined && value !== null) {
    if (!axiosDefaultOptions.headers) axiosDefaultOptions.headers = {}
    axiosDefaultOptions.headers = {
      ...axiosDefaultOptions.headers,
      [key]: value,
    }
  }
}
