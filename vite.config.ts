/** @format */

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
		AutoImport({
			/* options */ imports: ['vue', 'vue-router'],
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	base: './',
})
