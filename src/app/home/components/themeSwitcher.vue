<script lang="ts" setup>
import { Moon, Sun } from 'lucide-vue-next'
import Button from '@/shared/components/ui/button/Button.vue'
import { ref } from 'vue'

const switchTheme = ref(true)

const toggleTheme = () => {
	const page = document.querySelector('html')

	switchTheme.value = !switchTheme.value
	page?.classList.toggle('dark')
}
</script>

<template>
	<button @click="toggleTheme">
		<Button class="rounded-full w-10 h-10 flex items-center justify-center">
			<Sun v-if="switchTheme" />
			<Moon v-else />
		</Button>
	</button>
</template>
