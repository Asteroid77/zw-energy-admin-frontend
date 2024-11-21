import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import theme from '@/constant/config/theme'
import type { App } from 'vue'

/**
 * 初始化UI框架
 * @param {App<Element>} app
 */
export const useUIFramework = (app: App<Element>): void => {
  app.use(PrimeVue, theme)
  app.use(ToastService)
}
