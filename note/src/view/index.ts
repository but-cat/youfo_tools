import Vue from 'vue';
import App from './App.vue';

import UIComponents from "@/components/UI/index";
UIComponents(Vue);

import components from "@/components/index";
components(Vue);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');