import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: []
})
export class HeaderComponent implements OnInit {
	constructor(public userService: UserService, public router: Router) {}

	ngOnInit() {}

	public LogOut() {
		this.userService.LogOut();
		this.router.navigate(['/login']);
	}
}
