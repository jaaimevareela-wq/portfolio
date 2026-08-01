import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import './style.css'
import App from './App.vue'
import i18n from './i18n'

inject()
createApp(App).use(i18n).mount('#app')
