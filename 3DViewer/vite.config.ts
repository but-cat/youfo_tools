import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	publicDir: "./public",// 作为静态资源服务的文件夹。该目录中的文件在开发期间在 / 处提供，并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径。
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: tag => ['renderer-rtx'].includes(tag)
				}
			}
		}),
		// myPlugin(),
	],//需要用到的插件数组。Falsy 虚值的插件将被忽略，插件数组将被扁平化（flatten）。查看 插件 API 获取 Vite 插件的更多细节。




	resolve: {
		alias: {
			"@root": path.resolve(__dirname, "./"),
			"@": path.resolve(__dirname, "src"),
			"@opal": path.resolve(__dirname, "opal"),
		},
	},

	define: {
		'process.env': {},
	},

	server: {
		port: 3030,
		headers: {
			"Cross-Origin-Opener-Policy": "same-origin",
			"Cross-Origin-Embedder-Policy": "require-corp",
		},
	},


	css: {
		// css预处理器
		preprocessorOptions: {
			less: {
				charset: false,
				additionalData: '@import "./src/style/index.less";',
			},
		},
	},



	build: {
		outDir: "dist",
		target: 'esnext',
		// rollupOptions: {
		// 	input: {
		// 		default: './index.html',
		// 	},
		// },
	},
	// optimizedeps: {
	// 	esbuildoptions: {
	// 		target: 'es2020'
	// 	}
	// },

})

