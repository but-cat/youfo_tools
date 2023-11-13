<template>
<div id="app">
	<editor :data="data" ref="editor"/>
</div>
</template>

<script>
import editor from "./body";

export default {
	name: "App",
	data: () => ({
		win: null,
		data: {
			searchValue: ""
		}
	}),
	methods: {
		
	},
	components: {
		editor
	},
};
</script>

<style lang="less">
* {
	box-sizing: border-box;
}
html, body {
	width: 100%;
	height: 100%;
	/* -webkit-app-region: drag; */
	/* padding-top: 30px; */
	margin: 0;
	/* padding: 3px; */
	box-sizing: border-box;
	-webkit-app-region: drag;
	background-color: var(--background);
}
#app {
	width: 100%;
	height: 100%;
	box-shadow: 0 0 5px rgba(77, 77, 77, 0.212);
	-webkit-app-region: no-drag;

	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	// text-align: center;
	color: var(--textPccent);
	background-color: var(--background);
	/* background-color: azure; */
	/* margin-top: 60px; */

	display: flex;
	flex-direction: column;
}

div {
	&::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
		background-color: var(--background);
	}

	&::-webkit-scrollbar {
		width: 8px;
		background-color: #F5F5F5;
	}

	&::-webkit-scrollbar-thumb {
		// background-color: var(--background);
		background-color: var(--primary);	
		background-image: -webkit-linear-gradient(45deg,
					rgba(255, 255, 255, .2) 25%,
					transparent 25%,
					transparent 50%,
					rgba(255, 255, 255, .2) 50%,
					rgba(255, 255, 255, .2) 75%,
					transparent 75%,
					transparent);
		border-radius: 2px;

		&:hover {
			background-color: var(--primary);
			background-image: -webkit-linear-gradient(45deg,
					rgba(255, 255, 255, .2) 25%,
					transparent 25%,
					transparent 50%,
					rgba(255, 255, 255, .2) 50%,
					rgba(255, 255, 255, .2) 75%,
					transparent 75%,
					transparent);
		}
	}
}


@media (prefers-color-scheme: light) {
	:root { 
		--primary: #5c87a1;
		--success: #67C23A;
		--info: #65ceee;
		--warning: #f0ad4e;
		--danger: #F56C6C;
		--sceneText: #FFFFFF;
		--background: #fff;
		--backgroundVariant: #f7f7f7;
		--shadowColor: #d5d5d5;
		--textPrimary: #6e6e6e;
		--textPccent: #3b3b3b;
		--textHint: #1a1a1a;
		--disabled: rgba(0,0,0, 0.26);
		--disabledBackground: rgba(0,0,0, 0.12);
		--highlight: rgba(0,0,0, 0.12);
		--icon: rgba(0,0,0, 0.54);
		--divider: rgba(0,0,0, 0.12);
		--handle: #757575;
		--handleBackground: darken(#eee, 5%);
		--tooltip: #616161;
	}
}
@media (prefers-color-scheme: dark) {
	:root { 
		--primary: #3d6279;
		--success: #5caf33;
		--info: #3fafd1;
		--warning: #d89537;
		--danger: #df5151;
		--sceneText: #FFFFFF;
		--background: #111;
		--backgroundVariant: #303030;
		--shadowColor: #000;
		--textPrimary: #b9b9b9;
		--textPccent: #dfdfdf;
		--textHint: #f7f7f7;
		--disabled: rgba(0,0,0, 0.26);
		--disabledBackground: rgba(0,0,0, 0.12);
		--highlight: rgba(0,0,0, 0.12);
		--icon: rgba(0,0,0, 0.54);
		--divider: rgba(0,0,0, 0.12);
		--handle: #757575;
		--handleBackground: darken(#eee, 5%);
		--tooltip: #616161;
	}
}
</style>
