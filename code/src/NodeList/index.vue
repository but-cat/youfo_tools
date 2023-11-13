<template>
	<div class="w-96 h-full p-5 border-r dark:text-white border-gray-200 dark:border-gray-700 overflow-y-auto">
		<div class="text-xs text-gray-400 tracking-wider">FILES</div>
		<div class="relative mt-2">
			<input v-model="attributeFilter" type="text" class="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white focus:outline outline-2 outline-primary-300/80 w-full rounded-md text-sm" placeholder="搜索" />
			<svg viewBox="0 0 24 24" class="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="11" cy="11" r="8"></circle>
				<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
			</svg>
		</div>
		<div class="space-y-1 mt-3">

			<div v-for="item in fileList" :style="{ paddingLeft: `${item.tabSize * 20}px` }" @click="setActiveFile(item.path)" :class="false && 'bg-primary-200/40 dark:bg-primary-400/10'" class="text-sm tracking-tight rounded text-gray-700 dark:text-gray-400 hover:bg-primary-200/10 hover:dark:bg-primary-200/5 flex items-center font-medium">
				<arrowBtn :filterNode="filterNode" :item="item"></arrowBtn>
				<iconBar :item="item"></iconBar>

				{{ item.name }}
				<!-- <span class="text-slate-500">]</span> -->
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs, computed, onMounted, watch, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';

// import { XMLDoc } from '../Core/index';
import arrowBtn from './arrow.vue';
// import iconBar from './icon.vue';

const store = useStore();

const attributeFilter = ref<string>('');

import { FileBucket, FileItem, Folde } from '@/browser/store/file/bucket/index';
const bucket = computed(() => store.state.file.bucket);

export interface FileElItem {
	path: string;				// 唯一标识
	name: string;				// 名称
	isSubNode: boolean;			// 是否有子节点
	tabSize: number;			// 缩进
	// element: Element;
	isFolder: boolean;			// 是否是文件夹
	isFile: boolean;			// 是否是文件
	extension: string;			// 文件扩展名
}

const activeItem = computed(() => store.state.file.activeItem);

const filterNode = ref<Set<string>>(new Set());
const fileList = computed(() => {
	const list: FileElItem[] = [];
	const element = bucket.value;

	if (!element) return list;
	+(function traverse(current: Folde, tabSize: number) {
		if (current?.name)
			list.push({
				name: current?.name || 'root',
				path: current?.path,
				tabSize,
				isSubNode: current?.isFolder && !!current.size,
				isFolder: current?.isFolder,
				isFile: current?.isFile,
				extension: current?.extension || '',
			});
		if (!filterNode.value.has(current.name) && current?.isFolder) current.forEach((item, key, map) => traverse(item, tabSize + 1));
	})(element!, -1);

	return list;
});

function setActiveFile(path: string) {
	// store.commit('file/setActiveFile', path);
}

watch(
	() => store.state.code.activeItem,
	() => {
		// console.log("activeItem", activeItem.value);
	}
);
</script>

<style lang="less" scoped>
.material-node {
	position: relative;
	overflow: hidden;
	/* border-left: 1px solid var(--divider); */
	/* background-color: var(--background); */

	/* width: 100%;
	height: 100%; */
	/* background-image: url(assets/tile.png); */
	background-repeat: repeat;
	background-size: 30px 30px;
	/* background-color: #fbfbfb; */

	@grid_line: #171f2f;

	yellow: rgb(255, 251, 0);

	background: linear-gradient(to right, transparent 48%, @grid_line 49%, @grid_line 50%, transparent 51%), linear-gradient(to bottom, transparent 48%, @grid_line 49%, @grid_line 50%, transparent 51%);
	background-size: 50px 50px;
}

.node-editor[type='number'] point-in:not([type='number']) {
	opacity: 0.3;
}

.node-editor[type='vec4'] point-in:not([type='vec4']) {
	opacity: 0.3;
}
</style>