<script lang="ts" setup>
import { supabase } from '@/shared/lib/supabase'
import FormFields from '../components/formFields.vue'
import FormSelect from '../components/formSelect.vue'
import ThemeSwitcher from '../components/themeSwitcher.vue'
import { ref } from 'vue'

const inputText = ref('')
const fromLayout = ref('')
const toLayout = ref('')

const translateKeyboard = async () => {
	try {
		const { data, error } = await supabase.rpc('translate_keyboard_layout', {
			input_text: inputText.value,
			from_layout: fromLayout.value,
			to_layout: toLayout.value,
		})
		if (error) {
			throw error
		} else {
			console.log(data)
		}
	} catch (error) {
		console.log(error)
	}
}
</script>

<template>
	<div class="container mt-10">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-primary font-light font-mono text-lg">Hi!, Daniel</p>
				<h1 class="text-3xl font-black">Let's switch some text today!</h1>
			</div>
			<ThemeSwitcher />
		</div>
		<div class="mt-5">
			<FormSelect />
			<FormFields />
		</div>
	</div>
</template>
