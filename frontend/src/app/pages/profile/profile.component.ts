import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services';
import { read } from 'fs';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styles: []
})
export class ProfileComponent implements OnInit {
	user: User;
	image: File = null;
	tempImage: string | ArrayBuffer;

	constructor(public userService: UserService) {}

	ngOnInit() {
		this.user = this.userService.user;
	}

	public UpdateProfile(user: User) {
		this.userService.UpdateProfile(user).subscribe(response => {
			console.log(response);
			alert('profile updated');
		});
	}

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
		this.userService.UpdateProfileImage(this.image, this.user._id);
	}
}
