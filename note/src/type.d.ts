declare const __static:any;
const { BrowserWindow } = global.require("electron").remote;

declare module 'but-ui/packages/index.js';

declare global {
	interface Window { require: any; }
	interface __static { require: any; }
	interface File { require: any; }
	interface BrowserWindow { require: any; }
}