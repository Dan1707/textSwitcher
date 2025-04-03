<script lang="ts" setup>
import Button from '@/shared/components/ui/button/Button.vue'
import Textarea from '@/shared/components/ui/textarea/Textarea.vue'
import { Copy } from 'lucide-vue-next'
import { ref } from 'vue'

const emits = defineEmits(['wrongText'])

const wrongText = ref('')
</script>

<template>
	<form class="flex items-center justify-between mt-3 border rounded-xl">
		<div class="w-[50%]">
			<Textarea
				placeholder="Enter your wrong text"
				v-model="wrongText"
				class="h-[500px] text-xl flex items-start leading-none pt-2 border-l-0 border-t-0 border-b-0 shadow-none rounded-s-xl rounded-e-none"
				@input="$emit('wrongText', wrongText)"
			>
			</Textarea>
		</div>
		<div class="w-[50%] relative group duration-300">
			<Textarea
				placeholder="And take a correct one!"
				class="h-[500px] text-xl flex items-start leading-none pt-2 border-l-0 border-t-0 border-b-0 shadow-none rounded-e-xl rounded-s-none"
			>
			</Textarea>
			<Button
				class="absolute top-0 right-0 m-5 z-10 transition-opacity opacity-0 duration-300 group-hover:opacity-100"
				aria-label="Copy text"
			>
				<Copy />
			</Button>
		</div>
	</form>
</template>
