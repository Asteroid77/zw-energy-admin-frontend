import { VueQueryPlugin } from '@tanstack/vue-query'
import type { ToBeInstalledPlugin } from '@/types/plugins'

/**
 * 初始化TanStack Query
 */
export function useRequestPlugin(): ToBeInstalledPlugin {
  return {
    plugin: VueQueryPlugin,
  }
}
