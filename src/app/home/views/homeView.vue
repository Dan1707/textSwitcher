<script lang="ts" setup>
import FormFields from '../components/formFields.vue'
import FormSelect from '../components/formSelect.vue'
import ThemeSwitcher from '../components/themeSwitcher.vue'
import {
	useTranslateKeyboard,
	translatedText,
} from '@/app/home/composables/translateText'

// getting new translated text
useTranslateKeyboard
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
			<FormSelect :translatedText="translatedText" />
			<FormFields
				@newText="useTranslateKeyboard"
				:translatedText="translatedText"
			/>
		</div>
	</div>
</template>
