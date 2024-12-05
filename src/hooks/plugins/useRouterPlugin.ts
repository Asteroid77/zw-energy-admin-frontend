import type { CustomAxiosRequestConfig } from '@/types/axios'
import router from '@/router'
import type { ToBeInstalledPlugin } from '@/types/plugins'
export function useRouterPlugin(): ToBeInstalledPlugin {
  return {
    plugin: router,
  }
}
