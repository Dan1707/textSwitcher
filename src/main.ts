import { createApp } from 'vue'
import './shared/assets/style.css'
import App from './App.vue'
import router from './shared/routes/routes'

const app = createApp(App)
app.use(router)
app.mount('#app')
