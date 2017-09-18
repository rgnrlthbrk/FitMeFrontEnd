import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { DragScrollModule } from 'angular2-drag-scroll/src/angular2-drag-scroll';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';

import { UserDataComponent } from './pages/userdata_page/userdata.component';
import { HomepageComponent } from './pages/home_page/homepage.component';
import { RegistrationComponent } from './pages/form_registration/registration.component';
import { UserProfileComponent } from './pages/userprofile_page/userprofile.component';
import { TomorrowComponent } from './pages/tomorrow_page/tomorrow.component';
import { CarouselComponent } from './pages/tomorrow_page/carousel/carousel.component';
import { LoginComponent } from './pages/form_login/login.component';
import { LogoutComponent } from './pages/form_logout/logout.component';
import { PageNotFoundComponent } from './pages/pagenotfount_page/pagenotfound.component';

import { BarModule } from './pages/bar/bar.module';

import { AuthenticationService, SessionService, UserService, MenuService } from './services/index';
import { AuthGuard } from './guards/index';
import { PicturesComponent } from './pages/tomorrow_page/carousel/pictures/pictures.component';
import { HoverDirective } from './pages/tomorrow_page/hover.directive';
import { ParseService } from './services/parse.service';
import { MealService } from './services/meal.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserDataComponent,
    UserProfileComponent,
    TomorrowComponent,
    CarouselComponent,
    PicturesComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent,
    HoverDirective
  ],
  imports:      [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragScrollModule,
    BarModule,
    HttpModule
  ],
  providers:    [
    AuthGuard,
    SessionService,
    AuthenticationService,
    UserService,
    MenuService,
    ParseService,
    MealService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
