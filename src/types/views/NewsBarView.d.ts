import type { VNode } from 'vue'

declare interface NewsBarViewProps {
  /** 是否显示 */
  display?: boolean
  /** 显示内容
   * - VNode组件
   * - 普通string类型，由p标签包裹
   */
  content?: VNode | string
  /**
   * 状态
   * - error: 异常
   * - info: 标准消息
   * - success: 利好消息
   */
  status?: 'error' | 'info' | 'success'
}
