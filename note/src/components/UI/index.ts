import card from "./card/index.vue";
import gird from "./gird/index.vue";
import redraw from "./redraw/index.vue";
// import search from "./card/index.vue";
// import window from './window.vue';
// import checkBox from './checkBox/main.vue';

export default (Vue: any) => {
	Vue.component(card.name, card);
	Vue.component(gird.name, gird);
	Vue.component(redraw.name, redraw);
}