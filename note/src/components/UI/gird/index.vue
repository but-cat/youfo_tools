<template>
<div class="view">
	<div :class="[columnsXs, columnsSm, columnsMd, columnsLg]" class="list">
		<slot/>
	</div>
</div>
</template>

<script>
export default {
	name: "gird",
	props: {
		xs: {
			value: [String, Number],
			default: 1
		},
		sm: {
			value: [String, Number],
			default: 2
		},
		md: {
			value: [String, Number],
			default: 3
		},
		lg: {
			value: [String, Number],
			default: 4
		}
	},
	computed: {
		columnsXs() {
			return `columns-xs-${this.xs}`
		},
		columnsSm() {
			return `columns-sm-${this.sm}`
		},
		columnsMd() {
			return `columns-md-${this.md}`
		},
		columnsLg() {
			return `columns-lg-${this.lg}`
		}
	}
}
</script>

<style lang="less" scoped>
@import "~@/assets/style/index.less";

// 视图
.view {
	width: 100%;
	height: 100%;
	padding: 20px 50px 0;
	box-sizing: border-box;
	overflow: auto;

	// 项目列表
	.list {
		width: 100%;

		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 100px;
		grid-auto-rows: 100px;
		grid-auto-flow: row dense;
		grid-gap: 20px;

		@media (max-width: @screen-xs-max) {										// xs
			grid-template-columns: repeat(1, 1fr);
		}
		@media (min-width: @screen-sm) and (max-width: @screen-sm-max) {			// sm
			grid-template-columns: repeat(2, 1fr);
		}
		@media (min-width: @screen-md) and (max-width: @screen-md-max) {			// md
			grid-template-columns: repeat(3, 1fr);
		}
		@media (min-width: @screen-lg) {											// lg
			grid-template-columns: repeat(3, 1fr);
		}
	}
}
</style>