<!-- @format -->

<template>
	<div class="overview-table__wrapper">
		<n-data-table class="data-table"  :columns="columns" :data="calendarData" size="large" :summary="summary" flex-height></n-data-table>
	</div>
</template>

<script setup lang="ts">
	import { NDataTable } from 'naive-ui'
	import { columns, calcTotalTime } from '@/data/CalendarData'
	import type { CalendarData } from '@/data/CalendarData'
	import type { DataTableCreateSummary } from 'naive-ui'

  let totalTime = ref('')
  let calendarData = ref<CalendarData[]>()
	
	const summary: DataTableCreateSummary = () => {
		return {
			date: {
				value: h('span', { style: { color: 'red' } }, `总计：${totalTime.value}`),
				colSpan: 4,
			},
		}
	}

  function getTotalTime() {
    let dateArray: string[] = []
		calendarData.value && calendarData.value.map((item) => {
			// 取出所有的date
			dateArray.push(item.duration)
		})
		return calcTotalTime(dateArray)
  }   
  
	onMounted(() => {
		const db = uniCloud.database();
		db.collection('ff14_calendar').get().then(resp => {
			calendarData.value = resp.result.data
			totalTime.value = getTotalTime()
		})
	})
</script>

<style lang="scss">
.data-table {
	height: 70vh;
}
</style>
