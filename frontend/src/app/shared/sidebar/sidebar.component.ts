import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from '../../services';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styles: []
})
export class SidebarComponent implements OnInit {
	constructor(public sidebarService: SidebarService, public userService: UserService, public router: Router) {}

	ngOnInit() {}

	public LogOut() {
		this.userService.LogOut();
		this.router.navigate(['/login']);
	}
}
