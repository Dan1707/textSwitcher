import HomeView from '@/app/home/views/homeView.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [{ path: '/', name: 'home', component: HomeView }]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
