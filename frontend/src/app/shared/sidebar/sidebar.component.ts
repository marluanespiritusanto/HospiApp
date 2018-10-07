import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from '../../services';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styles: []
})
export class SidebarComponent implements OnInit {
	user: User;
	constructor(public sidebarService: SidebarService, public userService: UserService, public router: Router) {}

	ngOnInit() {
		this.user = this.userService.user;
	}

	public LogOut() {
		this.userService.LogOut();
		this.router.navigate(['/login']);
	}
}
