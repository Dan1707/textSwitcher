import { createApp } from 'vue'
import './shared/assets/style.css'
import App from './App.vue'
import router from './shared/routes/routes'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

const app = createApp(App)
app.use(router)
app.use(Vue3Toastify, {
	autoClose: 3000,
	// ...
} as ToastContainerOptions)
app.mount('#app')
