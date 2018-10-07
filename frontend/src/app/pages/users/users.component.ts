import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services';
import { UploadModalService } from '../../components/upload-modal/upload-modal.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styles: []
})
export class UsersComponent implements OnInit {
	users: User[] = [];
	page: number = 0;
	total: number;
	isLoading: boolean = true;

	constructor(public userService: UserService, public uploadModaService: UploadModalService) {}

	ngOnInit() {
		this.GetUsers();
		this.uploadModaService.notification.subscribe(res => {
			this.GetUsers();
		});
	}

	public GetUsers() {
		this.isLoading = true;
		this.userService.GetUsers(this.page).subscribe((users: any) => {
			this.total = users.payload.count;
			this.users = users.payload.users;
			this.isLoading = false;
		});
	}

	public ChangePage(requestPage: number) {
		let since: number = this.page + requestPage;
		if (since >= this.total || since < 0) {
			return;
		}

		this.page += requestPage;
		this.GetUsers();
	}

	public FindUser(query: string) {
		this.isLoading = true;
		this.userService.FindUser(query).subscribe((users: User[]) => {
			this.users = users;
			this.isLoading = false;
		});
	}

	public DeleteUser(user: User) {
		if (user._id === this.userService.user._id) {
			alert(`You can't delete this user`);
			return;
		}

		if (confirm('Are you sure?')) {
			this.userService.DeleteUser(user._id).subscribe(res => {
				this.GetUsers();
			});
		}
	}

	public UpdateRole(user: User) {
		this.userService.UpdateRole(user).subscribe(console.log);
	}

	public ShowModal(id: string) {
		this.uploadModaService.showModal('user', id);
	}
}
