import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
	imports: [RouterModule, CommonModule, PipesModule],
	declarations: [BreadcrumbsComponent, HeaderComponent, PagenotfoundComponent, SidebarComponent],
	exports: [BreadcrumbsComponent, HeaderComponent, PagenotfoundComponent, SidebarComponent]
})
export class SharedModule {}
