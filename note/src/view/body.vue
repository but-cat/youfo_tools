<template>
    <div class="body-container">
        <muya ref="muya" v-model="markdown" :isEditor="isEditor" />
        <div class="menu">
            <button @click="top">
				<img src="~@public/icon/menu/chevrons.svg">
			</button>
			<button v-if="!isEditor" @click="isEditor = !isEditor">
				<img src="~@public/icon/menu/file.svg">
			</button>
			<button v-else @click="save" :class="!isSave&&'disabled'">
				<img src="~@public/icon/menu/floppy.svg">
			</button>
           
        </div>
    </div>
</template>

<script>
import muya from "@/components/editor";
import sha256 from "sha256";
const fs = window.require("fs");

export default {
    props: {
        data: Object,
    },
    data: () => ({
        simplemde: null,
        editor: null,
        markdown: "",
        isEditor: false,
        saveHash: "",
	}),
	computed: {
		isSave() {
			try {
				return this.saveHash != sha256(this.markdown);
			} catch (error) {
				return false;
			}
		}
	},
    methods: {
        // async markdownToHtml() {
        //     const html = await new ExportHtml(this.markdown).renderHtml();
        //     const value = `<article class="markdown-body">${html}</article>`;
        //     const blob = new Blob([value], { type: "text/latex" });
        //     const bloburl = URL.createObjectURL(blob);
        //     var anchor = document.createElement("a"); // 创建a标签元素
        //     anchor.style.visibility = "hidden"; // 使元素不可见/不渲染该元素
        //     anchor.href = bloburl; // href的值
        //     anchor.download = "markdown.html"; // 下载的文件名
        //     document.body.appendChild(anchor); // 向body中追加anchor元素
        //     anchor.click(); // 触发元素的点击事件
        //     document.body.removeChild(anchor); // 删除节点
		// },
		top() {
			this.$refs.muya.$el.scrollIntoView({
				behavior: "smooth",
				block: "start"
			})
		},
		save() {
			const path = BASE_URL;
			fs.writeFile(path, this.markdown, (err) => {
			    if (err) {
			        console.log(err);
			    } else {
					console.log('ok.');
					this.saveHash = sha256(this.markdown);
			    }
			});
		}
    },
    mounted() {
        const path = BASE_URL;
        if (path) fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                console.log("error");
            } else {
				this.markdown = data;
				this.saveHash = sha256(data);
				this.$parent.$refs.heads.isSave = false;
            }
		});
	},
	watch: {
		isSave(markdown) {
			this.$parent.$refs.heads.isSave = this.isSave;
		}
	},
    components: {
        muya,
    },
};
</script>

<style lang="less" scoped>
.body-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;

	

    .menu {
        position: fixed;
		bottom: 30px;
		right: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
        button {
        	all: unset;
			width: 50px;
			height: 50px;
			cursor: pointer;
			box-shadow: 0 0 8px var(--shadowColor);
			background-color: var(--background);
			border-radius: 50%;
			margin-bottom: 10px;
			margin-left: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				width: 24px;
				height: 24px;
				display: inline-block;
				object-position: center;
				object-fit: scale-down;
			}
		}

		.disabled {
			pointer-events: none;
			position: relative;
			overflow: hidden;
			&::before {
				width: 100%;
				height: 100%;
				content: "";
				cursor: not-allowed;
				pointer-events: auto;
				position: absolute;
			}
		}
    }
}
</style>