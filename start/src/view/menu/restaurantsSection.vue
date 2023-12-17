<template>
	<div id="restaurants-section" class="menu-section">
		<div class="menu-section-title"><i class="fa-regular fa-pot-food" aria-hidden="true"></i><span class="menu-section-title-text">Get it delivered!</span></div>
		<div class="menu-section-content">
			<div class="restaurant-card background-image" style="background-image: url('https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')">
				<div class="restaurant-card-content">
					<div class="restaurant-card-content-items"><span class="restaurant-card-title">Burgers</span><span class="restaurant-card-desc">The best burgers in town</span></div>
				</div>
			</div>
			<div class="restaurant-card background-image" style="background-image: url('https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW18ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')">
				<div class="restaurant-card-content">
					<div class="restaurant-card-content-items"><span class="restaurant-card-title">Ice Cream</span><span class="restaurant-card-desc">The worst ice-cream around</span></div>
				</div>
			</div>
			<div class="restaurant-card background-image" style="background-image: url('https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')">
				<div class="restaurant-card-content">
					<div class="restaurant-card-content-items"><span class="restaurant-card-title">Pizza</span><span class="restaurant-card-desc">This 'Za be gettin down</span></div>
				</div>
			</div>
			<div class="restaurant-card background-image" style="background-image: url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFyYmVxdWV8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')">
				<div class="restaurant-card-content">
					<div class="restaurant-card-content-items"><span class="restaurant-card-title">BBQ</span><span class="restaurant-card-desc">BBQ ain't need no rhyme</span></div>
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
