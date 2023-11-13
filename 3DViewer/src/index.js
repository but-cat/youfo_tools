import { Engine, RegisterHeaderPlugin, RegisterToolbarPlugin, SetWebsiteEventHandler, StartEmbed, StartWebsite, UI } from "./website/index.js";


SetWebsiteEventHandler((eventName, eventLabel, eventParams) => {
	console.log({
		eventName: eventName,
		eventLabel: eventLabel,
		eventParams: eventParams
	});
});

StartWebsite('/libs');


StartEmbed('/libs');

window.OV = {
	Engine, RegisterHeaderPlugin, RegisterToolbarPlugin, SetWebsiteEventHandler, StartEmbed, StartWebsite, UI
}