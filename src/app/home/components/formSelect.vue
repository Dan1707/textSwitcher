<script lang="ts" setup>
import { ArrowRightLeft } from 'lucide-vue-next'
import Button from '@/shared/components/ui/button/Button.vue'
import { onBeforeMount, onBeforeUnmount, ref, watch } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { supabase } from '@/shared/lib/supabase'
import FormSelectItem from './formSelectItem.vue'
import { useHomeStore } from '../store/store'

const store = useHomeStore()

const wrongLang = ref('')
const correctLang = ref('')

const isChanged = ref(false)

// changing languages
const changeLang = () => {
	const wrongLangCopy = wrongLang.value
	const correctLangCopy = correctLang.value

	wrongLang.value = correctLangCopy
	correctLang.value = wrongLangCopy

	isChanged.value = !isChanged.value
}

// watching languages to not make them the same
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

watch(wrongLang, newVal => {
	store.fromLayout = newVal
})

watch(correctLang, newVal => {
	store.toLayout = newVal
})

// fetch languages
const langArr = ref([])

const fetchLang = async () => {
	try {
		const { data, error } = await supabase.rpc('get_language_columns')
		if (error) {
			throw error
		} else {
			langArr.value = data
			console.log(langArr.value)
		}
	} catch (error) {
		console.log(error)
	}
}

onBeforeMount(() => {
	fetchLang()
})
</script>

<template>
	<div class="flex items-center gap-[15px] max-sm:flex-col">
		<FormSelectItem :langArr="langArr" v-model="wrongLang" />
		<Button
			variant="ghost"
			class="transition-transform duration-300"
			:class="{ 'rotate-180': isChanged, 'rotate-0': isChanged === false }"
			@click="changeLang"
		>
			<ArrowRightLeft :size="20" />
		</Button>
		<FormSelectItem :langArr="langArr" v-model="correctLang" />
	</div>
</template>
