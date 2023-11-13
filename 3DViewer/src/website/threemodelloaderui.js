import { AddDiv } from '../engine/viewer/domutils.js';
import { ThreeModelLoader } from '../engine/threejs/threemodelloader.js';
import { ShowMessageDialog } from './dialogs.js';
import { ButtonDialog, ProgressDialog } from './dialog.js';
import { AddSvgIconElement } from './utils.js';
import { ImportErrorCode } from '../engine/import/importer.js';

export class ThreeModelLoaderUI {
	constructor() {
		this.modelLoader = new ThreeModelLoader();
		this.modalDialog = null;
	}

	LoadModel(inputFiles, settings, callbacks) {
		if (this.modelLoader.InProgress()) {
			return;
		}

		let progressDialog = null;
		this.modelLoader.LoadModel(inputFiles, settings, {
			onLoadStart: () => {
				this.CloseDialogIfOpen();
				callbacks.onStart();
				progressDialog = new ProgressDialog();
				progressDialog.Init('加载模型');
				progressDialog.Open();
			},
			onFileListProgress: (current, total) => {},
			onFileLoadProgress: (current, total) => {},
			onSelectMainFile: (fileNames, selectFile) => {
				progressDialog.Close();
				this.modalDialog = this.ShowFileSelectorDialog(fileNames, (index) => {
					progressDialog.Open();
					selectFile(index);
				});
			},
			onImportStart: () => {
				progressDialog.SetText('正在导入模型');
			},
			onVisualizationStart: () => {
				progressDialog.SetText('预览模型');
			},
			onModelFinished: (importResult, threeObject) => {
				progressDialog.Close();
				callbacks.onFinish(importResult, threeObject);
			},
			onTextureLoaded: () => {
				callbacks.onRender();
			},
			onLoadError: (importError) => {
				progressDialog.Close();
				callbacks.onError(importError);
				this.modalDialog = this.ShowErrorDialog(importError);
			},
		});
	}

	GetModelLoader() {
		return this.modelLoader;
	}

	GetImporter() {
		return this.modelLoader.GetImporter();
	}

	ShowErrorDialog(importError) {
		if (importError.code === ImportErrorCode.NoImportableFile) {
			return ShowMessageDialog('导入失败', '找不到可导入的文件。', null);
		} else if (importError.code === ImportErrorCode.FailedToLoadFile) {
			return ShowMessageDialog('导入失败', '无法加载要导入的文件.', '远程服务器拒绝满足请求。检查url是否正确，并确保远程服务器上允许CORS请求。');
		} else if (importError.code === ImportErrorCode.ImportFailed) {
			return ShowMessageDialog('导入失败', '无法导入模型。', importError.message);
		} else {
			return ShowMessageDialog('导入失败', '未知错误。', null);
		}
	}

	ShowFileSelectorDialog(fileNames, onSelect) {
		let dialog = new ButtonDialog();
		let contentDiv = dialog.Init('Select Model', [
			{
				name: '取消',
				subClass: 'outline',
				onClick() {
					dialog.Close();
				},
			},
		]);
		dialog.SetCloseHandler(() => {
			onSelect(null);
		});

		let text = '找到多个可导入的模型。从下面的列表中选择要导入的模型。';
		AddDiv(contentDiv, 'ov_dialog_message', text);

		let fileListSection = AddDiv(contentDiv, 'ov_dialog_section');
		let fileList = AddDiv(fileListSection, 'ov_dialog_import_file_list ov_thin_scrollbar');

		for (let i = 0; i < fileNames.length; i++) {
			let fileName = fileNames[i];
			let fileLink = AddDiv(fileList, 'ov_dialog_file_link');
			AddSvgIconElement(fileLink, 'meshes', 'ov_file_link_img');
			AddDiv(fileLink, 'ov_dialog_file_link_text', fileName);
			fileLink.addEventListener('click', () => {
				dialog.SetCloseHandler(null);
				dialog.Close();
				onSelect(i);
			});
		}

		dialog.Open();
		return dialog;
	}

	CloseDialogIfOpen() {
		if (this.modalDialog !== null) {
			this.modalDialog.Close();
			this.modalDialog = null;
		}
	}
}
