import './assets/main.css'

import { type App, createApp } from 'vue'
import { createPinia } from 'pinia'

import Application from './App.vue'
import router from './router'
import { useUIFrameworkPlugins } from '@/hooks/plugins/useUIFrameworkPlugins.ts'
import { useRequestPlugin } from '@/hooks/plugins/useRequestPlugin.ts'
import { usePlugins } from '@/hooks/plugins/usePlugins.ts'

const app: App<Element> = createApp(Application)

usePlugins(app, [
  { plugin: createPinia() }, //Pinia初始化,
  { plugin: router }, //路由初始化
  useUIFrameworkPlugins(), //UI框架初始化
  useRequestPlugin(),
])

app.mount('#app')
