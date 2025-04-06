<script lang="ts" setup>
import { supabase } from '@/shared/lib/supabase'
import FormFields from '../components/formFields.vue'
import FormSelect from '../components/formSelect.vue'
import ThemeSwitcher from '../components/themeSwitcher.vue'
import { useHomeStore } from '../store/store'
import { ref } from 'vue'

const store = useHomeStore()

// getting new translated text
const translatedText = ref('')
const isLoading = ref(false)

const translateKeyboard = async (inputText: string) => {
	try {
		isLoading.value = true
		setTimeout(async () => {
			const { data, error } = await supabase.rpc('translate_keyboard_layout', {
				input_text: inputText,
				from_layout: store.fromLayout,
				to_layout: store.toLayout,
			})
			if (error) {
				throw error
			} else {
				translatedText.value = data
				console.log(data)
			}
		}, 500)
	} catch (error) {
		console.log(error)
	} finally {
		isLoading.value = false
	}
}
</script>

<template>
	<div class="container mt-10">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-primary font-light font-mono text-lg max-sm:text-base">
					Hi!, Daniel
				</p>
				<h1 class="text-3xl font-black max-sm:text-xl">
					Let's switch some text today!
				</h1>
			</div>
			<ThemeSwitcher />
		</div>
		<div class="mt-5">
			<FormSelect />
			<FormFields
				@newText="translateKeyboard"
				:translatedText="translatedText"
				:isLoading="isLoading"
			/>
		</div>
	</div>
</template>
