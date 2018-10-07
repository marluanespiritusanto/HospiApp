import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SettingsService, SharedService, SidebarService, UserService } from './index';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { FilesService } from './files/files.service';
import { UploadModalService } from '../components/upload-modal/upload-modal.service';
import { HospitalService } from './hospital/hospital.service';

@NgModule({
	imports: [CommonModule, HttpClientModule],
	declarations: [],
	providers: [
		SettingsService,
		SharedService,
		SidebarService,
		UserService,
		LoginGuardGuard,
		FilesService,
		UploadModalService,
		HospitalService
	]
})
export class ServiceModule {}
