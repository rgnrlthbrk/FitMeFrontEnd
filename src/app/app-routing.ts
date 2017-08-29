import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './pages/home_page/homepage.component';
import { UserDataComponent } from './pages/userdata_page/userdata.component';
import { UserProfileComponent } from './pages/userprofile_page/userprofile.component';
import { RegistrationComponent } from './pages/form_registration/registration.component';
import { LoginComponent } from './pages/form_login/login.component';
import { LogoutComponent } from './pages/form_logout/logout.component';
import { PageNotFoundComponent } from './pages/pagenotfount_page/pagenotfound.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'user', component: UserDataComponent, canActivate: [ AuthGuard] },
  { path: 'user/:userName', component: UserProfileComponent, canActivate: [ AuthGuard]  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports:   [ BrowserModule, RouterModule.forRoot(routes) ],
  exports:   [ RouterModule ],
  providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
})
export class AppRoutingModule {
}
