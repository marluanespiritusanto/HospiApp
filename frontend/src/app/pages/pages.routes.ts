import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { HospitalsComponent } from './hospitals/hospitals.component';

const pagesROUTES: Routes = [
	{
		path: '',
		component: PagesComponent,
		canActivate: [LoginGuardGuard],
		children: [
			{ path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
			{ path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
			{ path: 'graphs', component: Graphics1Component, data: { title: 'Graphs' } },
			{ path: 'promises', component: PromisesComponent, data: { title: 'Promises' } },
			{ path: 'rxjs', component: RxjsComponent, data: { title: 'RxJS' } },
			{ path: 'settings', component: AccountSettingsComponent, data: { title: 'Settings' } },
			{ path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
			{ path: 'users', component: UsersComponent, data: { title: 'Users Maintence' } },
			{ path: 'hospitals', component: HospitalsComponent, data: { title: 'Hospitals Maintence' } },

			{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
		]
	}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesROUTES);
