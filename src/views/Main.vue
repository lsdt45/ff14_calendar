<!-- @format -->
<script setup lang="ts">
	import Calendar from '@/components/Calendar.vue'
	import OverviewTable from '@/components/OverviewTable.vue'
	import { NButton, NModal } from 'naive-ui'
	
	let showModal = ref(false)
	
	// const db = uniCloud.database(); //代码块为cdb
	// let data = db.collection('ff14_calendar').get()
	// console.log(data)
</script>

<template>
	<div class="main__wrapper">
		<n-button type="primary" size="medium" @click="showModal = true">总览</n-button>
		<Calendar />
		<n-modal v-model:show="showModal">
			<div class="overview-table">
				<overview-table></overview-table>
			</div>
		</n-modal>
	</div>
</template>

<style lang="scss">
.overview-table {
	width: 50%;
}
</style>
