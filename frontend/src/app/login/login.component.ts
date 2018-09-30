import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services';
import { User } from '../models/user.model';

declare function init_plugins();
declare const gapi: any;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	constructor(public router: Router, public userService: UserService) {}
	auth2: any;

	ngOnInit() {
		init_plugins();
		this.GoogleInit();
	}

	public GoogleInit() {
		gapi.load('auth2', () => {
			this.auth2 = gapi.auth2.init({
				client_id: '47546143332-78jf3tdedb5as6190n1i6dquo4m4fr4o.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin',
				scope: 'profile email'
			});

			this.AttachSignIn(document.getElementById('googleBtn'));
		});
	}

	public AttachSignIn(element) {
		this.auth2.attachClickHandler(element, {}, (googleUser: any) => {
			const token = googleUser.getAuthResponse().id_token;
			this.userService.GoogleLogin(token).subscribe(response => this.router.navigate(['/dashboard']));
		});
	}

	public Login(form: NgForm) {
		console.log(form.valid);
		console.log(form.value);
		const user = new User('', form.value.email, form.value.password);
		this.userService.Login(user).subscribe(response => this.router.navigate(['/dashboard']));
	}
}
