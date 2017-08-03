import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';

import { NavigationComponent } from './pages/bar/header/navigation.component';
import { FooterComponent } from './pages/bar/footer/footer.component';

import { UserpageComponent } from './pages/userprofile_page/userprofile.component';
import { HomepageComponent } from './pages/home_page/homepage.component';
import { RegistrationComponent } from './pages/form_registration/registration.component';
import { LoginComponent } from './pages/form_login/login.component';
import { PageNotFoundComponent } from './pages/notfount_page/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
    UserpageComponent,
    RegistrationComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
