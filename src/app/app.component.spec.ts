import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { NavigationComponent } from './pages/bar/header/navigation.component';
import { FooterComponent } from './pages/bar/footer/footer.component';

import { UserProfilePageComponent } from './pages/userprofile_page/userprofile.component';
import { HomepageComponent } from './pages/home_page/homepage.component';
import { RegistrationComponent } from './pages/form_registration/registration.component';
import { LoginComponent } from './pages/form_login/login.component';
import { PageNotFoundComponent } from './pages/notfount_page/notfound.component';
import { NavigationUserComponent } from './pages/bar/header_user/navigationUser.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing';
import { NavbarService } from './services/navbar.service';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent & TestModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationComponent,
        NavigationUserComponent,
        FooterComponent,
        HomepageComponent,
        UserProfilePageComponent,
        RegistrationComponent,
        LoginComponent,
        PageNotFoundComponent
      ],
      providers : [
        NavbarService
      ],
      imports:      [
        FormsModule,
        AppRoutingModule
      ]
    })

      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp    = fixture.componentInstance;
      });
  }));
  tests();
});

//////// Testing w/ NO_ERRORS_SCHEMA //////
describe('AppComponent & NO_ERRORS_SCHEMA', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationComponent,
        NavigationUserComponent,
        FooterComponent,
        HomepageComponent,
        UserProfilePageComponent,
        RegistrationComponent,
        LoginComponent,
        PageNotFoundComponent ],
      imports:      [
        FormsModule,
        AppRoutingModule
      ],
      providers : [
        NavbarService
      ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })

      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp    = fixture.componentInstance;
      });
  }));
  tests();
});

function tests() {

  it('can instantiate it', () => {
    expect(comp).not.toBeNull();
  });

  it('can instantiate nav-bar', () => {
    let de: DebugElement;
    let el: HTMLElement;

    de = fixture.debugElement.query(By.css('nav-bar'));
    el = de.nativeElement;
    expect(el).not.toBeNull();
  });


  it('can instantiate footer-bar', () => {
    let de: DebugElement;
    let el: HTMLElement;

    de = fixture.debugElement.query(By.css('footer-bar'));
    el = de.nativeElement;
    expect(el).not.toBeNull();
  });

}

