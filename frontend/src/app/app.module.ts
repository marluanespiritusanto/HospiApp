import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Routes
import { APP_ROUTES } from './app.routes';
import { RegisterComponent } from './login/register.component';

// Modules
import { PagesModule } from './pages/pages.module';
import { IncrementerComponent } from './components/incrementer/incrementer.component';
import { ServiceModule } from './services/service.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, IncrementerComponent],
  imports: [BrowserModule, APP_ROUTES, PagesModule, ServiceModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
