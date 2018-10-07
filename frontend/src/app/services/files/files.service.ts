import { Injectable } from '@angular/core';
import { API_URI } from '../../config';

@Injectable({
	providedIn: 'root'
})
export class FilesService {
	constructor() {}

	public FileUpload(file: File, type: string, id: string) {
		return new Promise((resolve, reject) => {
			const formData = new FormData();
			const xhr = new XMLHttpRequest();
			formData.append('picture', file, file.name);

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			};

			let url = API_URI + '/upload/' + type + '/' + id;
			xhr.open('PUT', url, true);
			xhr.send(formData);
		});
	}
}
