import { supabase } from '@/shared/lib/supabase'
import { useHomeStore } from '../store/store'
import { ref } from 'vue'

export const translatedText = ref('')

export const useTranslateKeyboard = async (inputText: string) => {
	const store = useHomeStore()
	setTimeout(async () => {
		try {
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
		} catch (error) {
			console.log(error)
		} finally {
		}
	}, 500)
}
