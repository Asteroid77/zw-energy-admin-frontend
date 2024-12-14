import './assets/main.css'

import { type App, createApp } from 'vue'

import Application from './App.vue'
import { useUIFrameworkPlugins } from '@/hooks/plugins/useUIFrameworkPlugins.ts'
import { useRequestPlugin } from '@/hooks/plugins/useRequestPlugin.ts'
import { usePlugins } from '@/hooks/plugins/usePlugins.ts'
import { useRouterPlugin } from '@/hooks/plugins/useRouterPlugin.ts'
import { usePiniaPlugin } from '@/hooks/plugins/usePiniaPlugin.ts'
import { useDirectives } from './hooks/directives/useDirectives'

const app: App<Element> = createApp(Application)

usePlugins(app, [usePiniaPlugin(), useRouterPlugin(), useUIFrameworkPlugins(), useRequestPlugin()])
useDirectives(app)

app.mount('#app')
