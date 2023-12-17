<template>
	<div id="app-menu-content-header">
		<div class="app-menu-content-header-section">
			<div id="app-menu-info" class="info">
				<span class="time">{{ times }}</span>
				<span class="weather">
					<i class="fa-duotone fa-sun" aria-hidden="true"></i>
					<span class="weather-temperature-value">65</span>
					<span class="weather-temperature-unit">°F</span>
				</span>
			</div>
			<!-- <div class="reminder">
				<div class="reminder-icon">
					<i class="fa-regular fa-bell" aria-hidden="true"></i>
				</div>
				<span class="reminder-text">Extra cool people meeting <span class="reminder-time">10AM</span></span>
			</div> -->
		</div>
		<!-- <div class="app-menu-content-header-section">
			<button id="sign-out-button" class="user-status-button clear-button" type="button">
				<i class="fa-solid fa-arrow-right-from-arc" aria-hidden="true"></i>
			</button>
		</div> -->
	</div>

	<div class="scrollable-component" id="quick-nav">
		<div class="quick-nav-item clear-button">
			<span class="quick-nav-item-label">Weather</span>
		</div>
		<div class="quick-nav-item clear-button">
			<span class="quick-nav-item-label">Food</span>
		</div>
		<div class="quick-nav-item clear-button">
			<span class="quick-nav-item-label">Apps</span>
		</div>
		<div class="quick-nav-item clear-button">
			<span class="quick-nav-item-label">Movies</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent, reactive, ref, getCurrentInstance, onMounted } from 'vue';

const internalInstance = getCurrentInstance(); // 有效  全局
const globalProperties = internalInstance?.appContext.config.globalProperties;
const $xhr = globalProperties!.$xhr;

const times = ref('');

function frame() {
	const time = new Date();
	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const milliseconds = time.getMilliseconds();
	const timeString = `${hours}:${minutes}`;
	times.value = timeString as string;
	requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
onMounted(async () => {
	frame();
});
</script>

<style lang="less" scoped></style>
