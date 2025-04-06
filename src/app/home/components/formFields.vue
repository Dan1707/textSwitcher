<script lang="ts" setup>
import Button from '@/shared/components/ui/button/Button.vue'
import Textarea from '@/shared/components/ui/textarea/Textarea.vue'
import { Copy } from 'lucide-vue-next'
import { ref } from 'vue'
import { useHomeStore } from '../store/store'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const store = useHomeStore()

// emiting new text
defineEmits(['newText'])

const inputText = ref('')

// getting translated text
const props = defineProps({
	translatedText: String,
	isLoading: Boolean,
})

// check selects
const checkSelects = () => {
	if (store.toLayout.length === 0 || store.fromLayout.length === 0) {
		toast.warning('Fill the language fields first!')
	}
}

// copy text

const copyText = () => {
	navigator.clipboard.writeText(props.translatedText || '')

	toast.success('Copied to clipboard!')
}
</script>

<template>
	<form
		class="flex items-center justify-between mt-3 border rounded-xl max-sm:flex-col"
	>
		<div class="w-[50%] max-sm:w-full">
			<Textarea
				v-model="inputText"
				placeholder="Enter your wrong text"
				class="h-[500px] max-sm:h-[300px] text-xl flex items-start leading-none pt-2 border-l-0 border-t-0 border-b-0 shadow-none rounded-s-xl rounded-e-none max-sm:rounded-t-xl max-sm:border-b max-sm:border-r-0 max-sm:rounded-b-none"
				@input="
					() => {
						$emit('newText', inputText)
						checkSelects()
					}
				"
				@click="checkSelects"
			>
			</Textarea>
		</div>
		<div class="w-[50%] relative group duration-300 max-sm:w-full">
			<Textarea
				placeholder="And take a correct one!"
				class="h-[500px] max-sm:h-[300px] text-xl flex items-start leading-none pt-2 border-l-0 border-t-0 border-b-0 shadow-none rounded-e-xl rounded-s-none max-sm:rounded-t-none max-sm:rounded-b-xl max-sm:border-r-0"
				:model-value="translatedText"
				readonly
			>
			</Textarea>
			<Button
				class="absolute top-0 right-0 m-5 z-10 transition-opacity opacity-0 duration-300 group-hover:opacity-100 max-sm:opacity-100"
				aria-label="Copy text"
				@click.prevent="copyText"
			>
				<Copy />
			</Button>
		</div>
	</form>
</template>
