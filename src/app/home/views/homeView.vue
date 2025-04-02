<script lang="ts" setup>
import FormFields from '../components/formFields.vue'
import FormSelect from '../components/formSelect.vue'
import ThemeSwitcher from '../components/themeSwitcher.vue'
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
