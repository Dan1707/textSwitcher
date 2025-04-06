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
</script>

<template>
	<Select class="bg-white dark:bg-black">
		<SelectTrigger>
			<SelectValue placeholder="Select a language of wrong text" />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel class="text-primary">Languages:</SelectLabel>
				<SelectItem v-for="lang in langArr" :key="lang" :value="lang">
					{{ lang }}
				</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
</template>
