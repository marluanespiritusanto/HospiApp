import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedService, SidebarService } from './index';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [SettingsService, SharedService, SidebarService]
})
export class ServiceModule {}
