import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';

import { UserProfilePageComponent } from './pages/userprofile_page/userprofile.component';
import { HomepageComponent } from './pages/home_page/homepage.component';
import { RegistrationComponent } from './pages/form_registration/registration.component';
import { LoginComponent } from './pages/form_login/login.component';
import { PageNotFoundComponent } from './pages/notfount_page/notfound.component';

import { BarModule } from './pages/bar/bar.module';

import { AuthenticationService, NavbarService, UserService } from './services/index';
import { AuthGuard } from './guards/index';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserProfilePageComponent,
    RegistrationComponent,
    LoginComponent,
    PageNotFoundComponent

  ],
  imports:      [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BarModule,
    HttpModule
  ],
  providers:    [
    AuthGuard,
    NavbarService,
    AuthenticationService,
    UserService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
