<!-- @format -->

<template>
	<div class="Calendar__wrapper">
		<!-- <n-button>naive-ui</n-button> -->
		<n-calendar v-model:value="value" #="{ year, month, date }" @update:value="handleUpdateValue">
      {{ year }}-{{ month }}-{{ date }}
    </n-calendar>
	</div>
</template>

<script setup lang="ts">
	import { NCalendar } from 'naive-ui'
	let value = ref()

	function handleUpdateValue(_: number, { year, month, date }: { year: number; month: number; date: number }) {
		console.log(year, month, date)
		// value.value = v
	}
</script>

<style lang="scss"></style>
