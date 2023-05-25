<!-- @format -->

<template>
	<div class="Calendar__wrapper">
		<n-calendar v-model:value="value" @update:value="handleUpdateValue">
			<template #default="{ year, month, date }">
				<div :class="{ 'end-date': isEndDate(new Date(`${year}-${month}-${date}`)) }">
					<span v-if="!isEndDate(new Date(`${year}-${month}-${date}`))">{{ activeName(new Date(`${year}-${month}-${date}`)) }}</span>
					<n-gradient-text v-else type="error">寄</n-gradient-text>
				</div>
			</template>
		</n-calendar>
	</div>
</template>

<script setup lang="ts">
	import { NCalendar, NGradientText } from 'naive-ui'
	let value = ref()
	// 开始日期
	let startDate = ref<Date>(new Date('2023-04-10'))
	// 结束日期
	let endDate = ref<Date>(new Date('2023-6-5'))
	// 额外的日期
	let extraDate = ['2023-04-07', '2023-04-21', '2023-05-14', '2023-05-18']
	
	// 判断是否为"班"
	let activeName = computed(() => {
		return (date: Date) => {
			return isActiveDate(date) ? '班' : ''
		}
	})
	// 判断是否为结束日期
	let isEndDate = computed(() => {
		return (date: Date) => {
			return date.getTime() == endDate.value.getTime()
		}
	})
	function handleUpdateValue(_: number, { year, month, date }: { year: number; month: number; date: number }) {
		console.log(year, month, date)
	}

	// 判断日期是否符合条件的方法
	function isActiveDate(date: Date): boolean {
		// 计算起始日期和传入日期之间的差值（以毫秒为单位）
		let diff: number = Math.abs(date.getTime() - startDate.value.getTime())
		// 将差值转换为天数
		let diffDays: number = Math.ceil(diff / (1000 * 3600 * 24))
		// 大于等于起始日期，小于结束日期，并且差值取余4小于2的日期，或者在额外日期内，则为"班"
		let isExtraDate = extraDate.some((item) => {
			return date.getTime() === new Date(item).getTime()
		})
		return date.getTime() >= startDate.value.getTime() && date.getTime() <= endDate.value.getTime() && diffDays % 4 < 2 || isExtraDate
		// return date.getTime() >= startDate.value.getTime() && date.getTime() <= endDate.value.getTime() && diffDays % 4 < 2
	}
</script>

<style lang="scss">
	.n-calendar-dates {
		grid-template-columns: repeat(7, 100px) !important;
	}
</style>
