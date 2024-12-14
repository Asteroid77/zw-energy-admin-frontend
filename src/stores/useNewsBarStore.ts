import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { NewsBarViewProps } from '@/types/views/NewsBarView'

export const useNewsBarStore = defineStore('newsBar', () => {
  /**
   * news bar是否显示
   */
  const display = ref<NewsBarViewProps['display']>(false)
  /**
   * news bar的content
   */
  const content = ref<NewsBarViewProps['content']>('')
  /**
   * news bar的通知状态
   */
  const status = ref<NewsBarViewProps['status']>('error')

  /**
   * 修改newsBar的content以及display
   * @param {NewsBarViewProps} v newsBar组件的全局状态
   */
  function toggle(v: NewsBarViewProps) {
    display.value = _valueUndefinedHandle<NewsBarViewProps['display']>(v.display, display.value)
    content.value = _valueUndefinedHandle<NewsBarViewProps['content']>(v.content, content.value)
    status.value = _valueUndefinedHandle<NewsBarViewProps['status']>(v.status, status.value)
  }
  /**
   * 赋值为undefined值时处理
   * @param {T} v 传递值
   * @param {T} sv 备选值
   * @returns {T}
   * @template T 参数实际类型
   */
  function _valueUndefinedHandle<T>(v: T, sv: T): T {
    if (typeof v === 'undefined') {
      return sv
    }
    return v
  }

  return { display, content, status, toggle }
})
