import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './pages/home_page/homepage.component';
import { UserProfilePageComponent } from './pages/userprofile_page/userprofile.component';
import { RegistrationComponent } from './pages/form_registration/registration.component';
import { LoginComponent } from './pages/form_login/login.component';
import { PageNotFoundComponent } from './pages/notfount_page/notfound.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user', component: UserProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomepageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports:   [ BrowserModule, RouterModule.forRoot(routes) ],
  exports:   [ RouterModule ],
  providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
})
export class AppRoutingModule {
}
