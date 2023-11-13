<template>
<div ref="editor" class=".markdown-editor-content"></div>
</template>

<script>
import Muya from "./muya/lib";
import TablePicker from "./muya/lib/ui/tablePicker";
import QuickInsert from "./muya/lib/ui/quickInsert";
import CodePicker from "./muya/lib/ui/codePicker";
import EmojiPicker from "./muya/lib/ui/emojiPicker";
import ImagePathPicker from "./muya/lib/ui/imagePicker";
import ImageSelector from "./muya/lib/ui/imageSelector";
import FormatPicker from "./muya/lib/ui/formatPicker";
import FrontMenu from "./muya/lib/ui/frontMenu";
import "./muya/themes/default.css";
import "./assets/index.css";

export default {
	props: {
		value: {
			value: String,
			default: ""
		},
		imgList: {
			value: Array,
			default: ()=>[]
		}
	},
	data: () => ({
		editor: null
	}),
	mounted() {
		const element = this.$refs.editor;

		Muya.use(TablePicker);
		Muya.use(QuickInsert);
		Muya.use(CodePicker);
		Muya.use(EmojiPicker);
		Muya.use(ImagePathPicker);
		Muya.use(ImageSelector);
		Muya.use(FormatPicker);
		Muya.use(FrontMenu);

		this.editor = new Muya(element, {
			markdown: this.value,
		});
		this.editor.on("change", (changes) => {
			console.log(changes);
			this.$emit("input", changes.markdown);
		});
	},
};
</script>