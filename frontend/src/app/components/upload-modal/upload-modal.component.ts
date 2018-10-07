import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../services';
import { UploadModalService } from './upload-modal.service';

@Component({
	selector: 'app-upload-modal',
	templateUrl: './upload-modal.component.html',
	styles: []
})
export class UploadModalComponent implements OnInit {
	tempImage: string | ArrayBuffer;
	image: File;

	constructor(public fileService: FilesService, public uploadModalService: UploadModalService) {}

	ngOnInit() {}

	public SelectFile(file: File) {
		if (!file) {
			return;
		}

		if (!file.type.includes('image')) {
			return;
		}

		const reader = new FileReader();
		let urlTemp = reader.readAsDataURL(file);
		reader.onloadend = () => {
			this.tempImage = reader.result;
		};
		this.image = file;
	}

	public UpdateImage() {
		this.fileService
			.FileUpload(this.image, this.uploadModalService.type, this.uploadModalService.id)
			.then(res => {
				console.log(res);
				this.uploadModalService.notification.emit(res);
				this.CloseModal();
			})
			.catch(console.log);
	}

	public CloseModal() {
		this.image = null;
		this.tempImage = null;
		this.uploadModalService.hideModal();
	}
}
