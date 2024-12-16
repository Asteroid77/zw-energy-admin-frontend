import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { LoadingBarViewProps } from '@/types/views/LoadingBar'

export const useLoadingBarStore = defineStore('loadingBar', () => {
  /**
   * 是否显示
   */
  const display = ref<LoadingBarViewProps['display']>(false)
  /**
   * 修改newsBar的content以及display
   * @param {LoadingBarViewProps} v newsBar组件的全局状态
   */
  function toggle(v: LoadingBarViewProps) {
    display.value = v.display
  }

  return { display, toggle }
})
