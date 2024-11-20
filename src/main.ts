import './assets/main.css'

import { type App, createApp } from 'vue'
import { createPinia } from 'pinia'

import Application from './App.vue'
import router from './router'
import UInitiation from '@/hooks/ui/UInitiation.ts'

const app: App<Element> = createApp(Application)

app.use(createPinia())
app.use(router)
//UI框架初始化
UInitiation(app)
app.mount('#app')
