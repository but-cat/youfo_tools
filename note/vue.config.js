const path = require('path');
const webpack = require('webpack');
// const CompressionPlugin = require("compression-webpack-plugin")

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	pages: {															// 修改 pages 入口

		index: {
			entry: './src/view/index.ts',								// 入口
			template: 'public/index.html',								// 模板
			filename: 'index.html',										// 输出文件
			title: 'markdown'
		}
	},
	chainWebpack: config => {											// 扩展 webpack 配置
		config.module
			.rule('svg-sprite-loader')
			.test(/\.svg$/)
			.include
			.add(resolve('src/icons')) //处理svg目录
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]'
			})

		config.resolve.alias
			.set('@', path.resolve('src'))								// @ 指向 src 目录
			.set('@root', path.resolve('./'))							// @root 指向根目录
			.set('@public', path.resolve('public'))						// @public 指向资源目录
			.set('vue$', path.resolve('vue/dist/vue.esm.js'))			// 鬼知道是啥
	},
	configureWebpack: {
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".json"],
			alias: {
				'vue$': 'vue/dist/vue.esm.js'
			}
		}
	},
	devServer: {
		open: false,
		host: 'localhost',
		port: '8080',
		proxy: {
			'/api': {
				target: 'http://localhost',								// 要请求的地址
				// target: 'http://192.168.0.46',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
		overlay: {
			warnings: false,
			errors: false
		},
	},
	pluginOptions: {
	},
	publicPath: './',
	outputDir: 'dist/',												// 输出文件目录
	lintOnSave: false
}