<template>
	<!-- <div> -->
	<div id="app-info" class="info">
		<span class="time">3:33</span><span class="weather"><i class="fa-duotone fa-sun" aria-hidden="true"></i><span class="weather-temperature-value">65</span><span class="weather-temperature-unit">°F</span></span>
	</div>
	<AppPinWrapper />
	<AppMenu />
	<Background/>
	<div id="sign-in-button-wrapper">
		<button id="sign-in-button" class="user-status-button clear-button" type="button">
			<i class="fa-solid fa-arrow-right-to-arc" aria-hidden="true"></i>
		</button>
	</div>
	<div id="app-loading-icon">
		<i class="fa-solid fa-spinner-third" aria-hidden="true"></i>
	</div>
	<!-- </div> -->
</template>

<script setup lang="ts">
import { defineComponent, reactive, ref, getCurrentInstance, onMounted } from 'vue';
// import Filelist from '@/browser/view/Filelist/index.vue';
import AppMenu from './view/menu/index.vue';
import AppPinWrapper from './view/appPinWrapper.vue';
import Background from './view/background.vue';
// import monaco from './editor/index.vue';

const internalInstance = getCurrentInstance(); // 有效  全局
const globalProperties = internalInstance?.appContext.config.globalProperties;
const $xhr = globalProperties!.$xhr;

const code = ref('');

function saveFile() {
	const stringData = code.value;
	const blob = new Blob([stringData], {
		type: 'text/plain;charset=utf-8',
	});
	const objectURL = URL.createObjectURL(blob);
	const aTag = document.createElement('a');
	aTag.href = objectURL;
	aTag.download = '文本文件.txt';
	aTag.click();
	URL.revokeObjectURL(objectURL);
}

onMounted(async () => {
	if (!window.BASE_URL) return;

	const data = await $xhr(window.BASE_URL);
	console.log('BASE_URL', data);
	if (data) code.value = data;
});
</script>

<style lang="less" scoped></style>

<style lang="less">
@import url('./style/style.less');
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
