import './assets/main.css'

import { type App, createApp } from 'vue'
import { createPinia } from 'pinia'

import Application from './App.vue'
import router from './router'
import { useUIFramework } from '@/hooks/ui/useUIFramework.ts'

const app: App<Element> = createApp(Application)

app.use(createPinia())
app.use(router)
//UI框架初始化
useUIFramework(app)
app.mount('#app')
