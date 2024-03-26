<template>
	<div class="w-full h-full bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 flex overflow-hidden text-sm relative">
		<!-- <Nodelist/> -->
		<!-- <Filelist/> -->
		<monaco v-model="code" />

		<button @click="saveFile" class="p-4 absolute bottom-8 right-8 z-10 rounded-full bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 active:bg-gray-200 active:dark:bg-gray-800 flex overflow-hidden text-sm">
			<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path fill="#6E6E6E" fill-rule="evenodd" d="M4,2 L18.4222294,2 L22,5.67676491 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M17,4 L17,10 L7,10 L7,4 L4,4 L4,20 L6,20 L6,12 L18,12 L18,20 L20,20 L20,6.48925072 L17.5777706,4 L17,4 Z M9,4 L9,8 L15,8 L15,4 L9,4 Z M8,14 L8,20 L16,20 L16,14 L8,14 Z M12,5 L14,5 L14,7 L12,7 L12,5 Z" />
			</svg>
		</button>
	</div>
</template>

<script setup lang="ts">
import { defineComponent, reactive, ref, getCurrentInstance, onMounted } from 'vue';
// import Filelist from '@/browser/view/Filelist/index.vue';
import monaco from './monaco/index.vue';
// import monaco from './editor/index.vue';

const internalInstance = getCurrentInstance(); // 有效  全局
const globalProperties = internalInstance?.appContext.config.globalProperties;
const $xhr = globalProperties!.$xhr;

const code = ref('');

// function saveFile() {
// 	const stringData = code.value;
// 	const blob = new Blob([stringData], {
// 		type: 'text/plain;charset=utf-8',
// 	});
// 	const objectURL = URL.createObjectURL(blob);
// 	const aTag = document.createElement('a');
// 	aTag.href = objectURL;
// 	aTag.download = '文本文件.txt';
// 	aTag.click();
// 	URL.revokeObjectURL(objectURL);
// }

async function saveFile() {
	const stringData = code.value;
	const base_url = window.BASE_URL;
	const res = await fetch(base_url, {
		method: 'PUT',
		body: stringData,
		headers: {
			"Content-Type": "application/octet-stream",
		},
	});
}

onMounted(async () => {
	if (!window.BASE_URL) return;
	
	const data = await $xhr(window.BASE_URL);
	console.log('BASE_URL', data);
	if (data) code.value = data;

	window.addEventListener('keydown', (e) => {
		if (e.ctrlKey && e.key === 's') {
			e.preventDefault();
			saveFile();
		}
	});
});
</script>

<style lang="less" scoped>
// .btn {
// 	display: inline-block;
// 	width: 24px;
// 	height: 24px;
// 	color: #fff;
// 	cursor: pointer;
// 	-webkit-app-region: no-drag;
// 	transition: color 0.2s;
// 	margin-left: -5px;
// 	border-radius: 50%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	fill: currentColor;
// 	padding: 5px;

// 	// opacity: 0;
// 	// position: absolute;
// 	// top: -15px;
// 	// right: -15px;

// 	color: rgb(235, 84, 84);
// 	background-color: #fff;

// 	&.home:hover {
// 		color: rgb(84, 235, 223);
// 		// background-color: rgba(255, 255, 255, 0.3);
// 	}

// 	&[disabled='disabled'] {
// 		color: #ccc;
// 		cursor: not-allowed;

// 		&:hover {
// 			color: #ccc;
// 			background-color: transparent;
// 		}
// 	}
// }
</style>

<style lang="less">
*,
*:before,
*:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

html,
body,
#app {
	height: 100%;
	width: 100%;
	margin: 0;
	// padding: 50px;
	color: #eee9dc;
	font: 16px Verdana, sans-serif;
	// user-select: none;
}
</style>
