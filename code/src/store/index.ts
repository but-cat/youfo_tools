import { MutationTree, ActionTree, GetterTree } from 'vuex';
import store, { RootState } from "@/browser/store/index";
import CodeState from "./state";
import router from "../router";


const state = {
	EventTarget: new EventTarget(),
	Editor: undefined,
	MonacoModel: undefined,
	MonacoViewState: undefined,

	codeString: "",

	past: "",
	future: "",
}


const mutations: MutationTree<CodeState> = {
	setCodeString(state, code: string) {
		state.codeString = code;
	},
	setMonacoModel(state, model: any) {
		state.MonacoModel = model;
	},
	setMonacoViewState(state, editor: any) {
		state.MonacoViewState = editor;
	},


	setMonacoEditor(state, editor: any) {
		state.Editor = editor;
	},
	setMonacoPast(state, model: string) {
		state.past = model;
	},
	setMonacoFuture(state, editor: string) {
		state.future = editor;
	},



	undo(state) {
		const editor = state.MonacoModel;
		editor.undo();
	},
	redo(state) {
		const editor = state.MonacoModel;
		editor.redo();
	},
}


export default {
	namespaced: true,
	state,
	// getters,
	mutations,
	actions: {
		
	},
}

export * from "./menu";
export const routerPath = router.path;