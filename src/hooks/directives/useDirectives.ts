import { StyleClass } from 'primevue'
import type { App } from 'vue'

/**
 * 统一注册指令
 * @param {App} app app instance
 */
export function useDirectives(app: App) {
  /** PrimeVue style class动画指令 */
  app.directive('styleclass', StyleClass)
}
