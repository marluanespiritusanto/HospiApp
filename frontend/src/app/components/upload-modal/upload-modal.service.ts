import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UploadModalService {
	public type: string;
	public id: string;
	public isShow: string = 'modalNotShow';
	public notification = new EventEmitter<any>();
	constructor() {}

	hideModal() {
		this.isShow = 'modalNotShow';
		this.id = null;
		this.type = null;
	}

	showModal(type: string, id: string) {
		this.isShow = '';
		this.id = id;
		this.type = type;
	}
}
