import { createPinia } from 'pinia'
import type { ToBeInstalledPlugin } from '@/types/plugins'

/**
 * 初始化pinia
 */
export function usePiniaPlugin(): ToBeInstalledPlugin {
  return { plugin: createPinia() }
}
