import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore('home', () => {
	const fromLayout = ref('')
	const toLayout = ref('')

	return {
		fromLayout,
		toLayout,
	}
})
