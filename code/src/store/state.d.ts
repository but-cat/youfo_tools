export default interface EditorState {
	EventTarget: EventTarget;
	Editor?: any;
	MonacoModel?: any;
	MonacoViewState?: any;

	codeString: string;

	past: string;
	future: string;
}