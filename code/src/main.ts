import { createApp } from 'vue';

import '@/style/index.less';
import '@/style/tailwind.css';

import App from './index.vue';



function $xhr(url: string, options: any = {}) {
	return new Promise((resolve, reject) => {
		try {
			const oReq = new XMLHttpRequest();
			oReq.addEventListener("load", function reqListener() {
				if (this.status == 200) {
					console.log("reqListener: ", JSON.parse(this.responseText));
					resolve(JSON.parse(this.responseText));
				} else {
					if(this.responseText) resolve(JSON.parse(this.responseText));
				}
			});
			oReq.open("GET", url);
			oReq.onerror = reject;
			oReq.send();
		} catch (error) {
			reject(error)
		}
	});
};

const app = createApp(App);


app.config.globalProperties.$xhr = $xhr;
(window as any).$xhr = $xhr;

setTimeout(() => {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) 
		document.body.classList.add("dark");//深色主题
	else document.body.classList.remove("dark");//浅色主题
}, 100);

// app.config.globalProperties.$http = request;
app.mount('#app');