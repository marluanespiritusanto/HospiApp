import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
	providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
	constructor(public userService: UserService, public router: Router) {}
	canActivate() {
		if (this.userService.IsLogged()) {
			return true;
		}
		this.router.navigate(['/login']);
		return false;
	}
}
