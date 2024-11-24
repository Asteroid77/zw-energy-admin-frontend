import type { Plugin } from 'vue'

export type ToBeInstalledPlugin = {
  plugin: Plugin
  option?: Recrod<string, unknown>
}
export type ToBeInstalledPluginList = (ToBeInstalledPlugin | ToBeInstalledPlugin[])[]
