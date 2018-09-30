import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { API_URI } from '../../config';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	user: User;
	token: string;

	constructor(public http: HttpClient) {
		this.LoadDataFromLocalStorage();
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
				console.log(payload);
				this.SaveOnLocalStorage(payload);
				return payload;
			})
		);
	}

	public SaveOnLocalStorage(data) {
		const currentUser: string = JSON.stringify(data);
		localStorage.setItem('currentUser', currentUser);
		debugger;
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
}
