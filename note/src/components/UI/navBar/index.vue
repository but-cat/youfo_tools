<template>
<but-nav-drawer @close="opens" :open="open" modal="sm" :bar="bar">
	<div class="menu">
		<!-- <but-nav-list-item :key="index" :src="home.icon" @click="router(home.path)" 
		:activated="$route.matched[0].path == home.path">{{home.title}}</but-nav-list-item> -->

		<!-- <but-nav-list-item v-for="(item, index) in navList" v-show="role.read >= item.role" :key="index" :src="item.icon" 
			
			@click="router(item.path)" :activated="$route.matched[0].path == item.path">{{item.title}}</but-nav-list-item> -->


		<but-nav-list-item v-for="(item, index) in navList" :key="index" :src="item.icon" 
		v-show="role.read >= item.role"  :disabled="!(role.read >= item.role)" @click="router(item.path)"
		:activated="$route.matched[0].path == item.path">{{item.title}}</but-nav-list-item>
	</div>

<!-- :activated="$route.path == item.path && permissions <= 0" :src="require('@/assets/icon/nav/settings.svg')"-->
	<div v-if="userInfo" class="menu" slot="menu">
		<but-nav-list-item :src="userInfo.info.avatar">{{userInfo.info.name}}</but-nav-list-item>
	</div>
</but-nav-drawer>
</template>

<script>
// import but from "./button"
export default {
	data(){
		return {
			open: true,
			bar: true,
			navList: this.$router.options.routes,
			path: ''
			// permissions: this.$store.state.user.info.permissions || 0
		}
	},
	computed: {
		role() {
			return (this.$store.state.settings.userInfo) ? this.$store.state.settings.userInfo.role : {
				read: 0,
				write: 0
			};
		},
		home() {
			return this.$router.options.routes[0];
		},
		userInfo() {
			return this.$store.state.settings.userInfo || false
		}
		// navList() {
		// 	let navList = this.$router.options.routes;
		// 	navList.shift();
		// 	return navList;
		// }
	},
	methods: {
		opens() {
			this.open = !this.open;
		},
		router(path = "/home/user") {
			this.$router.push({ path: path});
			// console.log("path", this.path, this.$route.path);
			
			// if (this.$route.path == this.path) {
			// 	this.open = !this.open;
			// }
			// this.path = this.$route.path;
		}
	},
	watch: {
		['$store.state.settings.userInfo']: {
			handler(newName, oldName) {
				this.$forceUpdate();
				if(this.$store.state.settings.userInfo) this.router()
				else this.router("/")
			}
		},
		['$store.state.settings.nightMode']: {
			handler(newName) {
				if(newName) {
					this.$but_scene.nightMode();
					localStorage.setItem("nightMode", "yes");
				}else {
					this.$but_scene.dayMode();
					localStorage.setItem("nightMode", "");
				}
			}
		},
		// ['$route.path']: {
		// 	handler(newName, oldName) {
		// 		this.open = !this.open;
		// 	}
		// },
	},
	components: {
		// but,
	},
	created() {
		this.path = this.$route.path;
	},
	mounted() {
		this.router();
	},
}
</script>

<style lang="less" scoped>
.menu {
	width: 100%;

	display: flex;
	align-items: center;
	flex-direction: column;
}

// .navBar {
// 	// width: 50px;
// 	height: 100%;

// 	background: #66ccff;

// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: space-between;

// 	.menu {
// 		width: 100%;

// 		display: flex;
// 		align-items: center;
// 		flex-direction: column;
// 	}

// 	.options {
// 		width: 100%;

// 		display: flex;
// 		align-items: center;
// 		flex-direction: column;
// 	}
// }


</style>