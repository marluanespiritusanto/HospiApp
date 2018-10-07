import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { API_URI } from '../../config';
import { map } from 'rxjs/operators';
import { FilesService } from '../files/files.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	user: User;
	token: string;

	constructor(public http: HttpClient, public fileService: FilesService) {
		this.LoadDataFromLocalStorage();
	}

	public GetUsers(page: number = 0) {
		let url = API_URI + '/user?page=' + page;
		return this.http.get(url);
	}

	public CreateUser(user: User) {
		let url: string = API_URI + '/user';
		return this.http.post(url, user).pipe(
			map((response: any) => {
				return response.payload.createdUser;
			})
		);
	}

	public Login(user: User) {
		let url: string = API_URI + '/account/login';
		return this.http.post(url, user).pipe(
			map((response: any) => {
				const payload = response.payload;
				this.SaveOnLocalStorage(payload);
				return payload;
			})
		);
	}

	public GoogleLogin(token: string) {
		let url: string = API_URI + '/account/login/google';
		return this.http.post(url, { token }).pipe(
			map((response: any) => {
				const payload = response.payload;
				this.SaveOnLocalStorage(payload);
				return payload;
			})
		);
	}

	public SaveOnLocalStorage(data) {
		const currentUser: string = JSON.stringify(data);
		localStorage.setItem('currentUser', currentUser);
		this.user = data.currentUser;
		this.token = data.token;
	}

	public LoadDataFromLocalStorage() {
		this.token = '';
		if (localStorage.getItem('currentUser')) {
			const data = JSON.parse(localStorage.getItem('currentUser'));
			this.user = data.currentUser;
			this.token = data.token;
		}
	}

	public IsLogged() {
		return this.token.length > 10;
	}

	public LogOut() {
		this.user = null;
		this.token = '';
		localStorage.removeItem('currentUser');
	}

	public UpdateProfile(user: User) {
		let url = API_URI + '/user/' + this.user._id;
		return this.http
			.put(url, user, {
				headers: {
					Authorization: this.token
				}
			})
			.pipe(
				map((response: any) => {
					const currentLS = JSON.parse(localStorage.getItem('currentUser'));
					const payload = response.payload.updatedUser;
					currentLS.currentUser = payload;
					this.SaveOnLocalStorage(currentLS);
					return currentLS;
				})
			);
	}

	public UpdateProfileImage(image: File, id: string) {
		this.fileService
			.FileUpload(image, 'user', id)
			.then((res: any) => {
				const currentLS = JSON.parse(localStorage.getItem('currentUser'));
				const payload = res.payload.updatedImage;
				this.user.picture = payload;
				currentLS.currentUser.picture = payload;
				this.SaveOnLocalStorage(currentLS);
				alert('picture updated');
				return currentLS;
			})
			.catch(console.log);
	}

	public FindUser(query: string) {
		let url = API_URI + '/search/users?query=' + query;
		return this.http
			.get(url, {
				headers: {
					Authorization: this.token
				}
			})
			.pipe(
				map((res: any) => {
					return res.payload.users;
				})
			);
	}

	public DeleteUser(id: string) {
		let url = API_URI + '/user/' + id;
		return this.http.delete(url, {
			headers: {
				Authorization: this.token
			}
		});
	}

	public UpdateRole(user: User) {
		let url = API_URI + '/user/' + user._id;
		return this.http
			.put(url, user, {
				headers: {
					Authorization: this.token
				}
			})
			.pipe(
				map((response: any) => {
					if (this.user._id === user._id) {
						const currentLS = JSON.parse(localStorage.getItem('currentUser'));
						const payload = response.payload.updatedUser;
						currentLS.currentUser = payload;
						this.SaveOnLocalStorage(currentLS);
						return currentLS;
					}
					return true;
				})
			);
	}
}
