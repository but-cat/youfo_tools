<template>
<but-card :elevation="3" :fillet="5">
<div class="social">
	<span class="title">社交账户</span>
	<div class="fromBody">
		<!-- <div class="classification">
			<but-checkbox v-model="classification.design" scene="info">设计</but-checkbox>
			<but-checkbox v-model="classification.media" scene="info">媒体</but-checkbox>
			<but-checkbox v-model="classification.development" scene="info">开发</but-checkbox>
			<but-checkbox v-model="classification.daily" scene="info">日常</but-checkbox>
			<but-checkbox v-model="classification.knowledge" scene="info">知识</but-checkbox>
			<but-checkbox v-model="classification.social" scene="info">通讯</but-checkbox>
		</div> -->
		<div class="personal">
			<!-- 通讯 -->
			<button v-for="(item, index) in config" :key="index" :class="(value[item.src]) ? 'activated' : ''" 
				@click="activated(item.src)" :title="item.name" class="socialAccounts" target="_blank">
				<img :src="'assets/icon/social/'+item.src+'.png'" alt="" class="socialAccountsIcon">
			</button>
		</div>

		<div class="from">
			<!-- <span>链接: {{focus}}</span> -->
			<img v-if="focus" :src="'assets/icon/social/'+focus.src+'.png'" alt="">
			<input v-model="link" :placeholder="focus.name" :disabled="!focus" ref="input" type="text" class="input"/>
		</div>
	</div>
</div>
</but-card>
</template>

<script>
import configs from "./icon_config";
export default {
	props: {
		value: {
			value: Object,
			default: ()=>({})
		},
	},
	data: ()=>({
		// classification: {
		// 	development: true,
		// 	daily: true,
		// 	media: true,
		// 	knowledge: true,
		// 	design: true,
		// 	social: true
		// },
		link: '',
		focus: false
	}),
	computed: {
		config() {
			return configs;
		},
	},
	methods: {
		activated(key) {
			this.link = '';

			if(this.focus.src != key && typeof(this.value[key]) != "undefined") {
				this.setFocus(key);
				this.link = this.value[key];
			}else if(typeof(this.value[key]) == "undefined") {
				this.setFocus(key);
			}else if(this.focus.src == key) {
				delete this.value[key];
				this.$emit('input', this.value);
			}

			this.$emit('input', this.value);
			this.$forceUpdate();
			this.$refs.input.focus()
		},
		setFocus(key) {
			for (let index = 0; index < this.config.length; index++) {
				const element = this.config[index];
				if(element.src == key) this.focus = element;
			}
		}
	},
	watch: {
		link: {
			handler(newName) {
				if(newName) {
					this.value[this.focus.src] = newName;
					this.$emit('input', this.value);
				}else {
					delete this.value[this.focus.src];
					this.$emit('input', this.value);
					// this.link = '';
				}

			}
		},
	},
	// mounted() {
	// 	console.log(this.value);
	// 	this.user = this.value;
	// }
}
</script>

<style lang="less" scoped>

.but-card {
	grid-column-start: span 2;
	grid-row-start: span 3;
}

.social {
	width: 100%;
	height: 100%;
	.title {
		font-size: 22px;
		letter-spacing: 0;
		line-height: 32px;
	}

	padding: 16px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;

	.fromBody {
		flex: 1;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;

		// 社交分类
		.classification {
			display: flex;
			.but-checkbox {
				margin: 0 1rem;
			}
		}

		// 社交图标组
		.personal {

			.socialAccounts {
				img {
					width: 40px;
					height: 40px;
				}
			}

			button {
				-webkit-appearance: none; /*去除默认样式*/
				display: inline-block;
				position: relative;
				cursor: pointer;

				&::after {
					position: absolute;
					top: 100%;
					left: 0;
					width: 100%;
					height: 4px;
					background: var(--primary);

					content: '';
					opacity: 0;
					transition: opacity 0.3s, transform 0.3s;
					transform: translateY(10px);
				}

				&[disabled] {
					-webkit-box-shadow: none;
					box-shadow: none;
					opacity: 0.5;
					cursor: not-allowed !important;
				}
			}

			.activated::after {
				opacity: .5;
				transform: translateY(-5px) !important;
			}
		}

		// 表单
		.from {
			margin-top: 10px;
			width: 100%;

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			img {
				width: 40px;
				height: 40px;
			}

			input {
				-webkit-appearance: none; /*去除默认样式*/
				margin: 11px 0;
				background-color: var(--backgroundVariant);
				border-radius: 4px;
				// width: 100%;
				flex: 1;
				-webkit-appearance: none;
				font-size: 16px;
				height: 36px;
				padding: 0;
				padding-left: 1rem;
				border: none;
				outline: none;
				color: var(--textPrimary);
			}

			.input {
				&::after {
					padding: 14px 20px;

				}
			}
		}

	}
}
</style>