<template>
<but-card :elevation="3" :fillet="5" class="items">
	<!-- <but-card-media :src="item.cover.img" size="200" order="head"/> -->

	<but-card-header>
		<but-title>
			{{title}}
			<small slot="small">{{brief}}</small>
		</but-title>
	</but-card-header>

	<but-card-content>
		{{tag}}
	</but-card-content>

	<but-card-actions>
		<but-button @click="router(item._id)" type="text" scene="danger">删除</but-button>
		<but-button @click="router(item._id)" type="text">编辑</but-button>
	</but-card-actions>
</but-card>
</template>

<script>
export default {
	name: "card",
	props: {
		cover: {
			value: String,
			default: ""
		},
		title: {
			value: String,
			default: "标题"
		},
		brief: {
			value: String,
			default: "文章简介"
		},
		tag: {
			value: String,
			default: "标签"
		}
	},
	data() {
		return {

		}
	},
	methodsm: {

	}
}
</script>

<style lang="less" scoped>
.items {
	width: 100%;
}
</style>