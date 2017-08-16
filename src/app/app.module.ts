import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';

import { NavigationComponent } from './pages/bar/header/navigation.component';
import { FooterComponent } from './pages/bar/footer/footer.component';

import { UserProfilePageComponent } from './pages/userprofile_page/userprofile.component';
import { HomepageComponent } from './pages/home_page/homepage.component';
import { RegistrationComponent } from './pages/form_registration/registration.component';
import { LoginComponent } from './pages/form_login/login.component';
import { PageNotFoundComponent } from './pages/notfount_page/notfound.component';
import { NavigationUserComponent } from './pages/bar/header_user/navigationUser.component';
import { NavbarService } from './services/navbar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarModule } from './pages/bar/bar.module';


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
    ReactiveFormsModule,
    BarModule
  ],
  providers:    [ NavbarService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
