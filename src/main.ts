import { createApp } from 'vue'
import './shared/assets/style.css'
import App from './App.vue'
import router from './shared/routes/routes'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(Vue3Toastify, {
	autoClose: 3000,
	// ...
} as ToastContainerOptions)
app.mount('#app')
