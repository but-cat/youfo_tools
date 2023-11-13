declare module '*.vue' {
	import Vue from 'vue'
	export default Vue
}

declare module 'hyperdrive' {
	import Hyperdrive from 'hyperdrive'
	export default <any>Hyperdrive
}