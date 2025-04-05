<script lang="ts" setup>
defineProps<{
	langArr: string[]
}>()

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
</script>

<template>
	<Select class="bg-white dark:bg-black">
		<SelectTrigger>
			<SelectValue placeholder="Select a language of wrong text" />
		</SelectTrigger>
		<SelectContent>
			<form class="flex items-center gap-2 max-w-[600px] m-auto mt-2">
				<Input type="search" placeholder="Search languages..." class="my-2" />
			</form>
			<SelectGroup>
				<SelectLabel class="text-primary">Languages:</SelectLabel>
				<SelectItem v-for="lang in langArr" :key="lang" :value="lang">
					{{ lang }}
				</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
</template>
