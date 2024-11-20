import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import theme from '@/constant/config/theme'
import type { App } from 'vue'

export default function (app: App<Element>) {
  app.use(PrimeVue, theme)
  app.use(ToastService)
}
