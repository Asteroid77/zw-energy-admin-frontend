import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import theme from '@/constant/config/theme.ts'
import type { ToBeInstalledPlugin } from '@/types/plugins'
/**
 * 初始化UI框架
 * @see https://primevue.org/vite/ 本体初始化
 * @see https://primevue.org/toast/#toast-service toast服务初始化
 * @see https://youtrack.jetbrains.com/issue/WEB-38704/css-variables-are-not-resolved-in-language-injection 如果你在用webstorm,或许你会疑惑为什么会有css variables报错
 */
export const useUIFrameworkPlugins = (): ToBeInstalledPlugin[] => {
  return [
    {
      plugin: PrimeVue,
      option: theme,
    },
    {
      plugin: ToastService,
    },
  ]
}
