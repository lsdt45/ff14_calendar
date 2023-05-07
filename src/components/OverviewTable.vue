<!-- @format -->

<template>
	<div class="overview-table__wrapper">
		<n-data-table :columns="columns" :data="calendarData" size="large" :summary="summary"></n-data-table>
	</div>
</template>

<script setup lang="ts">
	import { NDataTable } from 'naive-ui'
	import { columns, calendarData, calcTotalTime } from '@/data/CalendarData'
	import type { DataTableCreateSummary } from 'naive-ui'

  let totalTime = ref('')
  
	const summary: DataTableCreateSummary = (pageData) => {
		return {
			date: {
				value: h('span', { style: { color: 'red' } }, `总计：${totalTime.value}`),
				colSpan: 4,
			},
		}
	}

  function getTotalTime() {
    let dateArray: string[] = []
		calendarData.map((item) => {
			// 取出所有的date
			dateArray.push(item.duration)
		})
		return calcTotalTime(dateArray)
  }
  
	onMounted(() => {
    totalTime.value = getTotalTime()
    
	})
</script>

<style lang="scss"></style>
