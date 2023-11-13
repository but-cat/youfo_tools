import store from "@/browser/store/index";

export const menu = [
	{
		label: "编辑",
		submenu: [
			// ...list,
			{
				label: '撤销',
				click() {
					const editor = store.state!.code!.Editor;
					console.log(editor);
					
					editor.trigger("code", "undo");
				}
			},
			{
				label: "重做",
				click() {
					const editor = store.state!.code!.Editor;
					editor.trigger("code", "redo");
				}
			},
			// {
			// 	label: "清空历史记录",
			// 	click() {
			// 		// const editor = window.editor;
			// 		// if (confirm('The Undo/Redo History will be cleared. Are you sure?')) editor.history.clear();
			// 	}
			// },
			{ type: "separator" },
			{
				label: "放弃修改",
				click() {
					
				}
			},
		]
	}
]