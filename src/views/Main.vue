<!-- @format -->
<script setup lang="ts">
	import Calendar from '@/components/Calendar.vue'
	import {NButton} from 'naive-ui'
</script>

<template>
	<div class="main__wrapper">
		<n-button type="primary" size="medium">总览</n-button>
		<Calendar />
	</div>
</template>

<style lang="scss"></style>
