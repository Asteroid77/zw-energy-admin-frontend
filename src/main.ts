import './assets/main.scss'

import { type App, createApp } from 'vue'

import Application from './App.vue'
import { usePlugins } from '@/hooks/plugins/usePlugins.ts'
import { useDirectives } from './hooks/directives/useDirectives'

const app: App<Element> = createApp(Application)

usePlugins(app)
useDirectives(app)

app.mount('#app')
