<template>
<div class="markdown-content">
	<editor v-if="isEditor" v-bind="$attrs" v-on="$listeners"/>
	<reviewer v-else v-bind="$attrs" v-on="$listeners"/>
</div>
</template>

<script>
import editor from "./editor";
import reviewer from "./reviewer";
export default {
	props: {
		isEditor: {
			value: Boolean,
			default: false
		},
	},
	watch: {
		isEditor() {
			this.$forceUpdate();
		}
	},
	methods: {

	},
	components: {
		editor,
		reviewer,
	}
}
</script>

<style lang="less">
.markdown-content {
	contain: content;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	
	background-color: var(--background);
	caret-color:var(--textHint);

	// .ag-paragraph {
	// 	color: var(--textHint);
	// }
	.ag-plain-text, h1,h2,h3,h4,h5,h6 {
		color: var(--textPrimary);
	}

	blockquote>p {
		color: var(--textHint);
	}

	.ag-fence-code, pre {
		background-color: var(--backgroundVariant);
		text-shadow: none;
		code {
			// text-shadow: 0 1px var(--shadowColor);
			color: var(--textPccent);
			text-shadow: none;
			span {
				background-color: transparent;
			}
		}
	}

	.ag-inline-rule {
		color: var(--textHint);
		background-color: var(--backgroundVariant);
	}

	::selection {
		background: var(--themeColor30);
		color: var(--textPccent);
	}
}

// .color {
// 	--titleBarHeight: 32px;
//     --editorAreaWidth: 750px;
//     --themeColor: rgba(33, 181, 111, 1);
//     --themeColor90: rgba(33, 181, 111, .9);
//     --themeColor80: rgba(33, 181, 111, .8);
//     --themeColor70: rgba(33, 181, 111, .7);
//     --themeColor60: rgba(33, 181, 111, .6);
//     --themeColor50: rgba(33, 181, 111, .5);
//     --themeColor40: rgba(33, 181, 111, .4);
//     --themeColor30: rgba(33, 181, 111, .3);
//     --themeColor20: rgba(33, 181, 111, .2);
//     --themeColor10: rgba(33, 181, 111, .1);
//     --highlightColor: rgba(33, 181, 111, .4);
//     --selectionColor: rgba(0, 0, 0, .1);
//     --editorColor: rgba(0, 0, 0, .7);
//     --editorColor80: rgba(0, 0, 0, .8);
//     --editorColor60: rgba(0, 0, 0, .6);
//     --editorColor50: rgba(0, 0, 0, .5);
//     --editorColor40: rgba(0, 0, 0, .4);
//     --editorColor30: rgba(0, 0, 0, .3);
//     --editorColor10: rgba(0, 0, 0, .1);
//     --editorColor04: rgba(0, 0, 0, .03);
//     --editorBgColor: rgba(255, 255, 255, 1);
//     --deleteColor: #ff6969;
//     --iconColor: #6B737B;
//     --codeBgColor: #d8d8d869;
//     --codeBlockBgColor: rgba(0, 0, 0, 0.03);
//     --inputBgColor: rgba(0, 0, 0, .06);
//     --buttonBgColor: #ffffff;
//     --buttonBorderColor: rgba(0, 0, 0, 0.2);
//     --buttonShadow: rgba(0, 0, 0, 0.12);
//     --buttonHover: #f2f2f2;
//     --buttonActive: #e5e5e5;
//     --sideBarColor: rgba(0, 0, 0, .6);
//     --sideBarTitleColor: rgba(0, 0, 0, 1);
//     --sideBarTextColor: rgba(0, 0, 0, .4);
//     --sideBarBgColor: rgba(242, 242, 242, 0.9);
//     --sideBarItemHoverBgColor: rgba(0, 0, 0, .03);
//     --itemBgColor: rgba(255, 255, 255, 0.6);
//     --floatBgColor: #fff;
//     --floatHoverColor: rgba(0, 0, 0, .04);
//     --floatBorderColor: rgba(0, 0, 0, .1);
//     --floatShadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px, rgba(15, 15, 15, 0.04) 0px 3px 6px, rgba(15, 15, 15, 0.05) 0px 9px 24px;
//     --maskColor: rgba(255, 255, 255, .7);
// }
</style>