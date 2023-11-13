<template>
	<div class="badge-status">
		<span class="processing" />
	</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.badge-status {
	width: 20px;
	display: flex;
	align-items: center;

	.processing {
		width: 8px;
		height: 8px;
		position: relative;
		background-color: #f0ad4e;
		top: -1px;
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		&:after {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 1px solid #f0ad4e;
			border-radius: 50%;
			box-sizing: border-box;
			animation: antStatusProcessing 1.2s ease-in-out infinite;
			content: "";
		}
	}
}

@keyframes antStatusProcessing {
	0% {
		transform: scale(1);
		opacity: 0.5;
	}

	to {
		transform: scale(2.4);
		opacity: 0;
	}
}
</style>