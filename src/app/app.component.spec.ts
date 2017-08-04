import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';

import { NavigationComponent } from './pages/bar/header/navigation.component';
import { FooterComponent } from './pages/bar/footer/footer.component';

import { UserProfilePageComponent } from './pages/userprofile_page/userprofile.component';
import { HomepageComponent } from './pages/home_page/homepage.component';
import { RegistrationComponent } from './pages/form_registration/registration.component';
import { LoginComponent } from './pages/form_login/login.component';
import { PageNotFoundComponent } from './pages/notfount_page/notfound.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
        UserProfilePageComponent,
        HomepageComponent,
        RegistrationComponent,
        LoginComponent,
        PageNotFoundComponent
      ],
      imports: [
        FormsModule,
        AppRoutingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app     = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'FitMe'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app     = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FitMe');
  }));

});
