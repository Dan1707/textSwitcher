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
</script>

<template>
	<div class="flex items-center gap-[15px]">
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="Select a language of wrong text" />
			</SelectTrigger>
			<SelectContent>
				<form class="flex items-center gap-2 max-w-[600px] m-auto mt-2">
					<Input type="search" placeholder="Search languages..." class="my-2" />
				</form>
				<SelectGroup>
					<SelectLabel class="text-primary">Languages:</SelectLabel>
					<SelectItem value="apple"> English </SelectItem>
					<SelectItem value="apple"> Ukrainian </SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
		<Button variant="ghost">
			<ArrowRightLeft :size="20" />
		</Button>
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="Select a language you need" />
			</SelectTrigger>
			<SelectContent>
				<form class="flex items-center gap-2 max-w-[600px] m-auto">
					<Input type="search" placeholder="Search languages..." class="my-2" />
				</form>
				<SelectGroup>
					<SelectLabel class="text-primary">Languages:</SelectLabel>
					<SelectItem value="apple"> English </SelectItem>
					<SelectItem value="apple"> Ukrainian </SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	</div>
</template>
