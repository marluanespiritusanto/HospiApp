import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
	form: FormGroup;

	constructor(public userService: UserService, public router: Router) {}

	ngOnInit() {
		init_plugins();
		this.form = new FormGroup(
			{
				name: new FormControl(null, Validators.required),
				email: new FormControl(null, [Validators.required, Validators.email]),
				password: new FormControl(null, Validators.required),
				confirmPassword: new FormControl(null, Validators.required),
				conditions: new FormControl(false)
			},
			{ validators: this.ComparePasswords('password', 'confirmPassword') }
		);
	}

	public Register() {
		if (this.form.invalid) {
			return;
		}

		if (!this.form.value.conditions) {
			console.log('wa wa wa');
		}

		const user = new User(this.form.value.name, this.form.value.email, this.form.value.password);
		this.userService.CreateUser(user).subscribe(response => {
			console.log(response);
			this.router.navigate(['/login']);
		});
	}

	public ComparePasswords(firstPassword: string, secondPassword: string) {
		return (group: FormGroup) =>
			group.controls[firstPassword].value === group.controls[secondPassword].value ? null : { areEquals: true };
	}
}
