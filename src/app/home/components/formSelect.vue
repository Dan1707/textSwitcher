<script lang="ts" setup>
import { ArrowRightLeft } from 'lucide-vue-next'
import Button from '@/shared/components/ui/button/Button.vue'
import { onBeforeMount, ref, watch } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { supabase } from '@/shared/lib/supabase'
import FormSelectItem from './formSelectItem.vue'
import { useHomeStore } from '../store/store'
import { useTranslateKeyboard } from '../composables/translateText'

const store = useHomeStore()

const wrongLang = ref('')
const correctLang = ref('')

const isChanged = ref(false)

const props = defineProps({
	translatedText: String,
})

// --- LocalStorage Keys ---
const WRONG_LANG_KEY = 'keyboard_wrong_lang'
const CORRECT_LANG_KEY = 'keyboard_correct_lang'

// --- Load from localStorage on mount ---
onBeforeMount(() => {
	// fetch languages first
	fetchLang()

	// Load saved languages
	const savedWrong = localStorage.getItem(WRONG_LANG_KEY)
	const savedCorrect = localStorage.getItem(CORRECT_LANG_KEY)

	if (savedWrong) wrongLang.value = savedWrong
	if (savedCorrect) correctLang.value = savedCorrect
})

// --- Save to localStorage whenever languages change ---
watch(wrongLang, newVal => {
	store.fromLayout = newVal
	localStorage.setItem(WRONG_LANG_KEY, newVal)
})

watch(correctLang, newVal => {
	store.toLayout = newVal
	localStorage.setItem(CORRECT_LANG_KEY, newVal)
})

// --- Prevent same languages ---
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

// --- Language switch ---
const changeLang = () => {
	const wrongLangCopy = wrongLang.value
	const correctLangCopy = correctLang.value

	wrongLang.value = correctLangCopy
	correctLang.value = wrongLangCopy

	isChanged.value = !isChanged.value
	useTranslateKeyboard(props.translatedText || '')
}

// --- Fetch language list from DB ---
const langArr = ref<string[]>([])

const fetchLang = async () => {
	try {
		const { data, error } = await supabase.rpc('get_language_columns')
		if (error) {
			throw error
		} else {
			langArr.value = data
			console.log('Languages loaded:', langArr.value)
		}
	} catch (error) {
		console.log(error)
	}
}
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
