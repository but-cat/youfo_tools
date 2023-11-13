const icons = `<svg width="48" height="48" viewBox="0 0 48 48" class="w-5 h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="currentColor" d="M16 4C14 4 11 5 11 9C11 13 11 15 11 18C11 21 6 23 6 23C6 23 11 25 11 28C11 31 11 35 11 39C11 43 14 44 16 44" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path stroke="currentColor" d="M32 4C34 4 37 5 37 9C37 13 37 15 37 18C37 21 42 23 42 23C42 23 37 25 37 28C37 31 37 35 37 39C37 43 34 44 32 44" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const introduce = `由于编辑器在解析的过程中会丢弃注释信息,且在复杂文档中,某些xml属性存在联动的可能(如id);代码编辑器提供了一种在其他模块无法满足需求时的兜底实现`;

export default {
	path: '/code',
	name: 'Code',
	meta: {
		title: "代码编辑",
		icons,
		dev: false,
		introduce,
		fileType: ['xml', 'lua'],
	},
	component: () => import('@/browser/page/Code/index.vue'),
};