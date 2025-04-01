<script lang="ts" setup>
import Button from '@/shared/components/ui/button/Button.vue'
import Textarea from '@/shared/components/ui/textarea/Textarea.vue'

import { ArrowRightLeft, Copy } from 'lucide-vue-next'
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
	<div class="container mt-10">
		<div class="flex items-center gap-[5px]">
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Select a language of wrong text" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Languages:</SelectLabel>
						<SelectItem value="apple"> English </SelectItem>
						<SelectItem value="apple"> Ukrainian </SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Button variant="ghost">
				<ArrowRightLeft :size="48" />
			</Button>
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Select a language you need" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Languages:</SelectLabel>
						<SelectItem value="apple"> English </SelectItem>
						<SelectItem value="apple"> Ukrainian </SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
		<form class="flex items-center justify-between gap-[58px] w-full mt-3">
			<div class="w-full">
				<Textarea
					placeholder="Enter your wrong text"
					class="h-[500px] text-xl flex items-start leading-none pt-2"
				>
				</Textarea>
			</div>
			<div class="w-full relative group duration-300">
				<Textarea
					placeholder="And take a correct one!"
					class="h-[500px] text-xl flex items-start leading-none pt-2"
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
	</div>
</template>
