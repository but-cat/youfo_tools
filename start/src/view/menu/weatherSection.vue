<template>
	<div id="weather-section" class="menu-section overflow-auto">
		<div class="menu-section-title"><i class="fa-solid fa-sun" aria-hidden="true"></i><span class="menu-section-title-text">How's it look out there?</span></div>
		<div class="scrollable-component menu-section-content">
			<div class="day-card">
				<div class="day-card-content">
					<span class="day-weather-temperature">79<span class="day-weather-temperature-unit">°F</span></span
					><i class="day-weather-icon fa-duotone fa-sun sunny" aria-hidden="true"></i><span class="day-name">Mon</span>
				</div>
			</div>
			<div class="day-card">
				<div class="day-card-content">
					<span class="day-weather-temperature">64<span class="day-weather-temperature-unit">°F</span></span
					><i class="day-weather-icon fa-duotone fa-sun sunny" aria-hidden="true"></i><span class="day-name">Tues</span>
				</div>
			</div>
			<div class="day-card">
				<div class="day-card-content">
					<span class="day-weather-temperature">63<span class="day-weather-temperature-unit">°F</span></span
					><i class="day-weather-icon fa-duotone fa-clouds cloudy" aria-hidden="true"></i><span class="day-name">Wed</span>
				</div>
			</div>
			<div class="day-card">
				<div class="day-card-content">
					<span class="day-weather-temperature">60<span class="day-weather-temperature-unit">°F</span></span
					><i class="day-weather-icon fa-duotone fa-cloud-drizzle rainy" aria-hidden="true"></i><span class="day-name">Thurs</span>
				</div>
			</div>
			<div class="day-card">
				<div class="day-card-content">
					<span class="day-weather-temperature">76<span class="day-weather-temperature-unit">°F</span></span
					><i class="day-weather-icon fa-duotone fa-cloud-bolt stormy" aria-hidden="true"></i><span class="day-name">Fri</span>
				</div>
			</div>
			<div class="day-card">
				<div class="day-card-content">
					<span class="day-weather-temperature">73<span class="day-weather-temperature-unit">°F</span></span
					><i class="day-weather-icon fa-duotone fa-sun sunny" aria-hidden="true"></i><span class="day-name">Sat</span>
				</div>
			</div>
			<div class="day-card">
				<div class="day-card-content">
					<span class="day-weather-temperature">65<span class="day-weather-temperature-unit">°F</span></span
					><i class="day-weather-icon fa-duotone fa-clouds cloudy" aria-hidden="true"></i><span class="day-name">Sun</span>
				</div>
			</div>
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
