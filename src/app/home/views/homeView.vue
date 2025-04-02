<script lang="ts" setup>
import { ref } from 'vue'
import FormFields from '../components/formFields.vue'
import FormSelect from '../components/formSelect.vue'
import { Moon, Sun } from 'lucide-vue-next'
import Button from '@/shared/components/ui/button/Button.vue'

const switchTheme = ref(true)

const toggleTheme = () => {
	const page = document.querySelector('html')

	switchTheme.value = !switchTheme.value
	page?.classList.toggle('dark')
}
</script>

<template>
	<div class="container mt-10">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-primary font-light font-mono text-lg">Hi!, Daniel</p>
				<h1 class="text-3xl font-black">Let's switch some text today!</h1>
			</div>
			<button @click="toggleTheme">
				<Button class="rounded-full w-10 h-10 flex items-center justify-center">
					<Sun v-if="switchTheme" />
					<Moon v-else />
				</Button>
			</button>
		</div>
		<div class="mt-5">
			<FormSelect />
			<FormFields />
		</div>
	</div>
</template>
