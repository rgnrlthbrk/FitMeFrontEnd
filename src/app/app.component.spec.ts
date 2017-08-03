import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';

import { NavigationComponent } from './pages/bar/header/navigation.component';
import { FooterComponent } from './pages/bar/footer/footer.component';

import { UserpageComponent } from './pages/userprofile_page/userprofile.component';
import { HomepageComponent } from './pages/home_page/homepage.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
        UserpageComponent,
        HomepageComponent
      ],
      imports: [
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
