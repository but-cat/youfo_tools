<template>
	<div v-html="html" @click.stop="link" ref="reviewer" class="reviewer" />
</template>

<script>
import highlight from "highlight.js";
// import "highlight.js/styles/github.css";
import "highlight.js/styles/atom-one-light.css";

import marked from "marked";
import "./muya/themes/default.css";
import "./assets/index.css";

const { shell } = window.require("electron");

export default {
	props: {
		value: {
			value: String,
			default: "",
		},
	},
	computed: {
		html() {
			return marked(this.value);
		},
	},
	methods: {
		// marked,
		link(event) {
			event.preventDefault();
			console.log("event.path", event.path[0]?.href);
			if (event.path[0]?.href) shell.openExternal(event.path[0]?.href);
		},
	},
	mounted() {
		// hljs.registerLanguage('javascript', javascript);
		marked.setOptions({
			renderer: new marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: false,
			smartLists: true,
			smartypants: false,
			highlight: function (code) {
				return highlight.highlightAuto(code).value;
			},
		});
	},
};
</script>

<style lang="less" scoped>
.reviewer {
	max-width: var(--editorAreaWidth);
	min-width: 400px;
	min-height: 100%;
	margin: 0 auto;
	padding: 20px 50px 100px 50px;
}
</style>

<style lang="less">
.reviewer {
	p {
		white-space: pre-wrap;
		word-break: break-word;
	}

	// pre:any(code[class*="language-"]) {
	// 	overflow: visible;
	// 	font-size: 90%;
	// 	line-height: 1.6;
	// 	background: var(--codeBlockBgColor);
	// 	border: 1px solid var(--editorColor10);
	// 	border-radius: 3px;
	// 	color: var(--editorColor50);

	// 	padding: 1em;
	// 	margin: 1em 0;
	// }

	pre {
		padding: 1rem;
		overflow: auto;
	}

	hr {
		border-top: 2px dashed var(--editorColor10);
		background-color: transparent;
	}

	li {
		position: relative;
		input[type="checkbox"] {
			position: absolute;
			cursor: pointer;
			width: 12px;
			height: 12px;
			top: 5px;
			left: -23px;
			transform-origin: center;
			transition: all 0.2s ease;

			&::before {
				content: "";
				width: 18px;
				height: 18px;
				box-sizing: border-box;
				display: inline-block;
				border: 2px solid var(--editorColor50);
				border-radius: 50%;
				background-color: var(--editorBgColor);
				position: absolute;
				top: -2px;
				left: -2px;
				box-sizing: border-box;
				transition: all 0.2s ease;
			}

			&:checked::after {
				transform: rotate(-45deg)  scale(1);
				content: '';
				width: 8px;
				height: 4px;
				border: 2px solid var(--editorBgColor);
				border-top: none;
				border-right: none;
				position: absolute;
				display: inline-block;
				top: 1px;
				left: 4px;
				transform-origin: bottom;
				transition: all .2s ease;
			}

			&:checked::before {
				background: var(--themeColor);
				border-color: var(--themeColor);
				box-shadow: 0 3px 12px 0 var(--selectionColor);
			}
		}

		
	}

	p code, td code, th code {
		background-color: var(--codeBlockBgColor);
		border-radius: 3px;
		/* font-family: Menlo, Monaco, Consolas, "Courier New", monospace; */
		// padding: 2px 4px 0px 4px;
		font-size: 85%;
		margin: 0;
		padding: 0.2em 0.4em;
		color: var(--editorColor);
	}
}
</style>