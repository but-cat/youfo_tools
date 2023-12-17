<template>
	<div id="tools-section" class="menu-section">
		<div class="menu-section-title"><i class="fa-solid fa-toolbox" aria-hidden="true"></i><span class="menu-section-title-text">What's Appening?</span></div>
		<div class="menu-section-content">
			<div class="tool-card">
				<div class="tool-card-background background-image" style="background-image: url('https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')"></div>
				<div class="tool-card-content">
					<div class="tool-card-content-header"><span class="tool-card-label">Weather</span><span class="tool-card-name">Cloudly</span></div>
					<i class="fa-solid fa-cloud-sun tool-card-icon" aria-hidden="true"></i>
				</div>
			</div>
			<div class="tool-card">
				<div class="tool-card-background background-image" style="background-image: url('https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')"></div>
				<div class="tool-card-content">
					<div class="tool-card-content-header"><span class="tool-card-label">Calc</span><span class="tool-card-name">Mathio</span></div>
					<i class="fa-solid fa-calculator-simple tool-card-icon" aria-hidden="true"></i>
				</div>
			</div>
			<div class="tool-card">
				<div class="tool-card-background background-image" style="background-image: url('https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFua3xlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')"></div>
				<div class="tool-card-content">
					<div class="tool-card-content-header"><span class="tool-card-label">Bank</span><span class="tool-card-name">Cashy</span></div>
					<i class="fa-solid fa-piggy-bank tool-card-icon" aria-hidden="true"></i>
				</div>
			</div>
			<div class="tool-card">
				<div class="tool-card-background background-image" style="background-image: url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')"></div>
				<div class="tool-card-content">
					<div class="tool-card-content-header"><span class="tool-card-label">Travel</span><span class="tool-card-name">Fly-er-io-ly</span></div>
					<i class="fa-solid fa-plane tool-card-icon" aria-hidden="true"></i>
				</div>
			</div>
			<div class="tool-card">
				<div class="tool-card-background background-image" style="background-image: url('https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')"></div>
				<div class="tool-card-content">
					<div class="tool-card-content-header"><span class="tool-card-label">Games</span><span class="tool-card-name">Gamey</span></div>
					<i class="fa-solid fa-gamepad-modern tool-card-icon" aria-hidden="true"></i>
				</div>
			</div>
			<div class="tool-card">
				<div class="tool-card-background background-image" style="background-image: url('https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZGVvJTIwY2hhdHxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')"></div>
				<div class="tool-card-content">
					<div class="tool-card-content-header"><span class="tool-card-label">Video Chat</span><span class="tool-card-name">Chatty</span></div>
					<i class="fa-solid fa-video tool-card-icon" aria-hidden="true"></i>
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
