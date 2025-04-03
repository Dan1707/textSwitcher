<script lang="ts" setup>
import { ArrowRightLeft } from 'lucide-vue-next'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/select'
import Input from '@/shared/components/ui/input/Input.vue'
import Button from '@/shared/components/ui/button/Button.vue'
import { ref, watch } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const emits = defineEmits(['sendLang'])
const wrongLang = ref('')
const correctLang = ref('')

const isChanged = ref(false)

const changeLang = () => {
	const wrongLangCopy = wrongLang.value
	const correctLangCopy = correctLang.value

	wrongLang.value = correctLangCopy
	correctLang.value = wrongLangCopy

	isChanged.value = !isChanged.value
}

watch([wrongLang, correctLang], () => {
	if (
		wrongLang.value &&
		correctLang.value &&
		wrongLang.value === correctLang.value
	) {
		toast.error("Languages can't be the same!")
		if (isChanged.value) {
			wrongLang.value = ''
		} else {
			correctLang.value = ''
		}
	}
})
</script>

<template>
	<div class="flex items-center gap-[15px]">
		<Select class="bg-white dark:bg-black" v-model="wrongLang">
			<SelectTrigger>
				<SelectValue placeholder="Select a language of wrong text" />
			</SelectTrigger>
			<SelectContent>
				<form class="flex items-center gap-2 max-w-[600px] m-auto mt-2">
					<Input type="search" placeholder="Search languages..." class="my-2" />
				</form>
				<SelectGroup>
					<SelectLabel class="text-primary">Languages:</SelectLabel>
					<SelectItem value="English"> English </SelectItem>
					<SelectItem value="Ukrainian"> Ukrainian </SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
		<Button
			variant="ghost"
			class="transition-transform duration-300"
			:class="{ 'rotate-180': isChanged, 'rotate-0': isChanged === false }"
			@click="changeLang"
		>
			<ArrowRightLeft :size="20" />
		</Button>
		<Select class="bg-white dark:bg-black" v-model="correctLang">
			<SelectTrigger>
				<SelectValue placeholder="Select a language you need" />
			</SelectTrigger>
			<SelectContent>
				<form class="flex items-center gap-2 max-w-[600px] m-auto">
					<Input type="search" placeholder="Search languages..." class="my-2" />
				</form>
				<SelectGroup>
					<SelectLabel class="text-primary">Languages:</SelectLabel>
					<SelectItem value="English"> English </SelectItem>
					<SelectItem value="Ukrainian"> Ukrainian </SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	</div>
</template>
