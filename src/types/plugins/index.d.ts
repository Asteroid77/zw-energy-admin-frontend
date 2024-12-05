import type { Plugin } from 'vue'

/**
 * 需要应用的插件
 */
export type ToBeInstalledPlugin = {
  /**
   * 插件本体
   */
  plugin: Plugin
  /**
   * 插件option
   */
  option?: Recrod<string, unknown>
}
/**
 * 需要应用的插件列表
 */
export type ToBeInstalledPluginList = (ToBeInstalledPlugin | ToBeInstalledPlugin[])[]
