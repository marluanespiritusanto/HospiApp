import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SettingsService, SharedService, SidebarService, UserService } from './index';
import { LoginGuardGuard } from './guards/login-guard.guard';

@NgModule({
	imports: [CommonModule, HttpClientModule],
	declarations: [],
	providers: [SettingsService, SharedService, SidebarService, UserService, LoginGuardGuard]
})
export class ServiceModule {}
