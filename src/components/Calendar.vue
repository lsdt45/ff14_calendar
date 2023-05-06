<!-- @format -->

<template>
	<div class="Calendar__wrapper">
		<!-- <n-button>naive-ui</n-button> -->
		<n-calendar v-model:value="value" @update:value="handleUpdateValue">
			<template #default="{ year, month, date }">
				<div class="calendar-cell">
					{{ activeName(new Date(`${year}-${month}-${date}`)) }}
				</div>
			</template>
		</n-calendar>
	</div>
</template>

<script setup lang="ts">
	import { NCalendar } from 'naive-ui'
	let value = ref()
	let startDate = ref<Date>(new Date('2023-5-8'))
	let endDate = ref<Date>(new Date('2023-6-5'))
	let activeName = computed(() => {
		return (date: Date) => {
			return isActiveDate(date) ? '班' : ''
		}
	})

	function handleUpdateValue(_: number, { year, month, date }: { year: number; month: number; date: number }) {
		console.log(year, month, date)
	}

	// 定义一个判断日期是否符合条件的方法
	function isActiveDate(date: Date): boolean {
		// 计算起始日期和传入日期之间的差值（以毫秒为单位）
		let diff: number = Math.abs(date.getTime() - startDate.value.getTime())
		// 将差值转换为天数
		let diffDays: number = Math.ceil(diff / (1000 * 3600 * 24))
		// 大于等于起始日期，小于终止日期，并且差值取余4小于2的日期为班
		return date.getTime() >= startDate.value.getTime() && date.getTime() <= endDate.value.getTime() && diffDays % 4 < 2
		// return date.getTime() >= startDate.value.getTime() && diffDays % 4 < 2
	}
</script>

<style lang="scss">
	.n-calendar-dates {
		grid-template-columns: repeat(7, 100px) !important;
	}
</style>
