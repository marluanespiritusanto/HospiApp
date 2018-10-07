import { Pipe, PipeTransform } from '@angular/core';
import { API_URI } from '../config';

@Pipe({
	name: 'image'
})
export class ImagePipe implements PipeTransform {
	transform(picture: string, type: string = 'user'): any {
		let url = API_URI + '/picture';
		if (!picture) {
			return url + '/user/default';
		}

		if (picture.includes('https')) {
			return picture;
		}

		switch (type) {
			case 'user':
				url += '/user/' + picture;
				break;
			case 'hospital':
				url += '/hospital/' + picture;
				break;
			case 'doctor':
				url += '/doctor/' + picture;
				break;
			default:
				url += '/user/default';
				break;
		}
		return url;
	}
}
