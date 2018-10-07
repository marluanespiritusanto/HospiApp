import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: []
})
export class HeaderComponent implements OnInit {
	user: User;

	constructor(public userService: UserService, public router: Router) {}

	ngOnInit() {
		this.user = this.userService.user;
	}

	public LogOut() {
		this.userService.LogOut();
		this.router.navigate(['/login']);
	}
}
