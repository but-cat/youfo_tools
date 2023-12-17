<template>
	<div id="movies-section" class="menu-section">
		<div class="menu-section-title"><i class="fa-solid fa-camera-movie" aria-hidden="true"></i><span class="menu-section-title-text">Popcorn time!</span></div>
		<div class="scrollable-component menu-section-content">
			<div id="movie-card-1" class="movie-card">
				<div class="movie-card-background background-image" style="background-image: url('https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')"></div>
				<div class="movie-card-content">
					<div class="movie-card-info"><span class="movie-card-title">Protectors of the Milky Way</span><span class="movie-card-desc">A tale of some people watching over a large portion of space.</span></div>
					<i class="fa-solid fa-galaxy" aria-hidden="true"></i>
				</div>
			</div>
			<div id="movie-card-2" class="movie-card">
				<div class="movie-card-background background-image" style="background-image: url('https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')"></div>
				<div class="movie-card-content">
					<div class="movie-card-info"><span class="movie-card-title">Hole People</span><span class="movie-card-desc">Some people leave their holes to disrupt some things.</span></div>
					<i class="fa-solid fa-hat-wizard" aria-hidden="true"></i>
				</div>
			</div>
			<div id="movie-card-3" class="movie-card">
				<div class="movie-card-background background-image" style="background-image: url('https://images.unsplash.com/photo-1632266484284-a11d9e3a460a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')"></div>
				<div class="movie-card-content">
					<div class="movie-card-info"><span class="movie-card-title">Pot of Hair</span><span class="movie-card-desc">A boy with a dent in his head tries to stop a bad guy. And by bad I mean bad at winning.</span></div>
					<i class="fa-solid fa-broom-ball" aria-hidden="true"></i>
				</div>
			</div>
			<div id="movie-card-4" class="movie-card">
				<div class="movie-card-background background-image" style="background-image: url('https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60')"></div>
				<div class="movie-card-content">
					<div class="movie-card-info"><span class="movie-card-title">Area Fights</span><span class="movie-card-desc">A long drawn out story of some people fighting over some space. Cuz there isn't enough of it.</span></div>
					<i class="fa-solid fa-starship-freighter" aria-hidden="true"></i>
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
