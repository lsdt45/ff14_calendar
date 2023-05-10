<!-- @format -->

<script setup lang="ts">
	import Main from '@/views/Main.vue'
	import { NConfigProvider } from 'naive-ui'
	import { zhCN, dateZhCN } from 'naive-ui'
</script>

<template>
	<n-config-provider :locale="zhCN" :date-locale="dateZhCN">
		<Main />
	</n-config-provider>
</template>

<style></style>
