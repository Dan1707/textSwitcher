<script lang="ts" setup>
import { Moon, Sun } from 'lucide-vue-next'
import Button from '@/shared/components/ui/button/Button.vue'
import { ref, onMounted } from 'vue'

const THEME_KEY = 'theme'

const switchTheme = ref(true) // true = light (Sun), false = dark (Moon)

const toggleTheme = () => {
	const page = document.querySelector('html')
	switchTheme.value = !switchTheme.value

	if (switchTheme.value) {
		page?.classList.remove('dark')
		localStorage.setItem(THEME_KEY, 'light')
	} else {
		page?.classList.add('dark')
		localStorage.setItem(THEME_KEY, 'dark')
	}
}

onMounted(() => {
	const savedTheme = localStorage.getItem(THEME_KEY)
	const page = document.querySelector('html')

	if (savedTheme === 'dark') {
		switchTheme.value = false
		page?.classList.add('dark')
	} else {
		switchTheme.value = true
		page?.classList.remove('dark')
	}
})
</script>

<template>
	<button @click="toggleTheme">
		<Button class="rounded-full w-10 h-10 flex items-center justify-center">
			<Sun v-if="switchTheme" />
			<Moon v-else />
		</Button>
	</button>
</template>
