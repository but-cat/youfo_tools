<template>
	<div class="code w-full h-full" ref="codeContent"></div>
</template>

<script setup lang="ts">
import { defineComponent, reactive, ref, shallowReadonly, computed, getCurrentInstance, onMounted, onBeforeUnmount, toRefs } from 'vue';
// import { useStore } from 'vuex';
import monokai from 'monaco-themes/themes/Monokai.json'; // https://editor.bitwiser.in/
import blackboard from 'monaco-themes/themes/Blackboard.json';
import zh_CN from 'monaco-editor-nls/locale/zh-hans';
// import active4d from 'monaco-themes/themes/Active4D.json';
import { language } from "./language";

import active4d from './Active4D.json';
import * as monaco from 'monaco-editor';
import './xml';
// const store = useStore();

const internalInstance = getCurrentInstance(); // 有效  全局
const globalProperties = internalInstance?.appContext.config.globalProperties;
const $xhr = globalProperties!.$xhr;

const codeContent = ref(null as unknown as HTMLDivElement);
// const editor: any = shallowReadonly(null as unknown as monaco.editor.IStandaloneCodeEditor);
let editor = null as unknown as monaco.editor.IStandaloneCodeEditor;
const code = ref('');
// const code = computed(() => store.state.code.xmlString);

// const theme = ref("vs-dark");






function initEditor(extension = 'text') {
	// console.log(codeContent.value, language);

	monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
		noSemanticValidation: true,
		noSyntaxValidation: false,
	});
	monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
		target: monaco.languages.typescript.ScriptTarget.ES2020,
		allowNonTsExtensions: true,
	});

	// 初始化编辑器，确保dom已经渲染
	monaco.editor.defineTheme('monokai', monokai as any);
	monaco.editor.defineTheme('blackboard', blackboard as any);
	monaco.editor.defineTheme('active4d', active4d as any);
	editor = monaco.editor.create(codeContent.value, {
		value: code.value, //编辑器初始显示代码
		language: language.get(extension), //语言支持自行查阅demo
		automaticLayout: true, //自动布局
		theme: document.body.classList.contains('dark') ? 'blackboard' : 'active4d', //官方自带三种主题vs, hc-black, or vs-dark

		model: (window as any).model ? (window as any).model : undefined,
		// viewState: (window as any).viewState ? (window as any).viewState : undefined,
	});
	// editor.onKeyUp(() => {
	// 	// 当键盘按下，判断当前编辑器文本与已保存的编辑器文本是否一致
	// 	const value = editor.getValue();
	// 	// store.commit('code/setCodeString', value);
	// 	code.value = value;
	// });

	// store.commit('code/setMonacoEditor', editor);

	// if(store.state.code.codeString) editor.setValue(store.state.code.codeString);
	// if(store.state.code.MonacoModel) editor.setModel(toRefs(store.state.code.MonacoModel));
	// if(store.state.code.MonacoViewState) editor.restoreViewState(toRefs(store.state.code.MonacoViewState));
	// if((window as any).viewState) editor.restoreViewState((window as any).viewState);
	// if((window as any).model) editor.setModel((window as any).model);
}

function getValue() {
	editor.getValue(); //获取编辑器中的文本
}
function setValue(data: string = '') {
	console.log(data, editor.setValue);

	editor.setValue(data); // 设置编辑器中的文本

	// editor.setValue(data);
}

// function getAssets(url: string = "") {
// 	if(!url) return;
// 	function reqListener() {
// 		console.log(this.responseText);
// 		setValue(this.responseText as string);
// 	}

// 	var oReq = new XMLHttpRequest();
// 	oReq.addEventListener("load", reqListener);
// 	oReq.open("GET", url);
// 	oReq.send();
// }

onMounted(async () => {
	const extension = window?.BASE_URL?.replace(/.+\./, '') || 'text';

	console.log(extension, window.BASE_URL);

	initEditor(extension);
	//192.168.0.100:3600/

	// setTimeout(async () => {
	if(window.BASE_URL) (async () => {
		const code = await $xhr(window.BASE_URL);
		if(code) setValue(code);
	})();
	// }, 5000)


	(window as any).editor = editor;

	// console.log('onMounted', toRefs(store.state.code.MonacoModel));

	// console.log(location.hash);
	// const path = location.hash.replace(/\#/, '');
	// if(path) getAssets(window.BASE_URL);

	const observer = new MutationObserver(() => {
		// monaco.editor.setTheme('monokai');
		if (document.body.classList.contains('dark')) monaco.editor.setTheme('blackboard');
		else monaco.editor.setTheme('active4d');
	});

	observer.observe(document.body, {
		attributes: true,
		attributeFilter: ['class'],
	});
});

// onBeforeUnmount(() => {
// 	// https://stackoverflow.com/questions/48210120/get-restore-monaco-editor-undoredo-stack/49189282#49189282
// 	const model = editor.getModel();
// 	const viewState = editor.saveViewState();
// 	const value = editor.getValue();

// 	// store.commit('code/setMonacoModel', model);
// 	// store.commit('code/setMonacoViewState', viewState);
// 	// store.commit('code/setCodeString', value);
// 	// store.commit('code/setMonacoViewState', viewState);

// 	(window as any).viewState = viewState;
// 	(window as any).model = model;

// 	// editor.dispose();
// });
</script>

<style lang="less" scoped>
.code {
	// width: 100%;
	// height: 100%;
	flex: 1;
	overflow: hidden;
	color: white;
}
</style>
