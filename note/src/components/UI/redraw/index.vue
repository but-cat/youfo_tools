<template>
<div class="redraw">
	<div class="con">
		<slot :width="width" :height="height"/>
	</div>
	<object ref="object" class="object" type="text/html" data="about:blank"/>
</div>
</template>

<script>
export default {
	name: 'redraw',
	data() {
		return {
			width: 0,
			height: 0
		}
	},
	methods: {
		resize() {
			// this.$emit("resize", this.$el.clientWidth, this.$el.clientHeight);
			let size = this.$el.getBoundingClientRect();
			this.width = size.width;
			this.height = size.height;
			this.$emit("resize", size.width, size.height);
		}
	},
	mounted() {
		this.resize();
		this.$refs.object.contentDocument.defaultView.addEventListener("resize", this.resize);
	},
	beforeDestroy() {
		this.$refs.object.contentDocument.defaultView.removeEventListener("resize", this.resize);
	}
}
</script>

<style lang="less" scoped>
.redraw {
	width:100%;
	height:100%;
	overflow: auto;
	position: relative;
}
.con {
	width:100%;
	height:100%;
	position: static;
	overflow: hidden;
}
.object {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
	opacity: 0;
	pointer-events: none;
	z-index: -100;
	opacity: 0;
}
</style>