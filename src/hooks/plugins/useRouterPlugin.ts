import router from '@/router'
import type { ToBeInstalledPlugin } from '@/types/plugins'

export function useRouterPlugin(): ToBeInstalledPlugin {
  return {
    plugin: router,
    callback: async () => {
      const module = await import('@/hooks/router/useRouterGuard.ts')
      ;(function _initiation() {
        // 初始化路由守卫
        module.useRouterGuard(router)
      })()
    },
  }
}
