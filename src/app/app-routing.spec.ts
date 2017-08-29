// For more examples:
//   https://github.com/angular/angular/blob/master/modules/@angular/router/test/integration.spec.ts

import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { SpyLocation } from '@angular/common/testing';

import { click } from '../testing';
// r - for relatively obscure router symbols
import * as r from '@angular/router';
import { Router, RouterLinkWithHref } from '@angular/router';

import { By } from '@angular/platform-browser';
///////////////
import { DebugElement, Type } from '@angular/core';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { UserDataComponent } from './pages/userdata_page/userdata.component';
import { RegistrationComponent } from './pages/form_registration/registration.component';
import { HomepageComponent } from './pages/home_page/homepage.component';
import { PageNotFoundComponent } from './pages/pagenotfount_page/pagenotfound.component';
import { LoginComponent } from './pages/form_login/login.component';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let page: Page;
let router: Router;
let location: SpyLocation;

describe('AppComponent & RouterTestingModule', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
    }).compileComponents();
  }));

  it('should navigate to "UserProfile" immediately', fakeAsync(() => {
    createComponent();
    expect(location.path()).toEqual('/home', 'after initialNavigation()');
    expectElementOf(HomepageComponent);
  }));

  xit('should navigate to "Registration" on click', fakeAsync(() => {
    createComponent();
    click(page.registrationLinkDe);

    advance();
    expectPathToBe('/registration');
    expectElementOf(RegistrationComponent);

    page.expectEvents([
      [ r.NavigationStart, '/registration' ], [ r.RoutesRecognized, '/registration' ],
      [ r.NavigationEnd, '/registration' ]
    ]);
  }));

  xit('should navigate to "UserProfile" on click', fakeAsync(() => {
    createComponent();
    click(page.usersLinkDe);

    advance();
    expectPathToBe('/user');
    expectElementOf(UserDataComponent);

    page.expectEvents([
      [ r.NavigationStart, '/user' ], [ r.RoutesRecognized, '/user' ],
      [ r.NavigationEnd, '/user' ]
    ]);
  }));

  it('should navigate to "Home" w/ browser location URL change', fakeAsync(() => {
    createComponent();
    location.simulateHashChange('/home');

    advance();
    expectPathToBe('/home');
    expectElementOf(HomepageComponent);
  }));

  it('should navigate to "PageNotFound" with wrong location', fakeAsync(() => {
    createComponent();
    location.simulateHashChange('/asdf');

    advance();
    expectPathToBe('/asdf');
    expectElementOf(PageNotFoundComponent);
  }));

  // Can't navigate to lazy loaded modules with this technique
  it('should navigate to "Login" on click', fakeAsync(() => {
    createComponent();
    page.loginLinkDe.nativeElement.click();
    advance();
    expectPathToBe('/login');
  }));

});

xdescribe('AppComponent & Lazy Loading', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
    }).compileComponents();
  }));

  it('dummy', () => expect(true).toBe(true));

  it('should navigate to "Home" on click', async(() => {
    page.homeLinkDe.nativeElement.click();
    advance();
    expectPathToBe('/home');
    expectElementOf(HomepageComponent);
  }));

  it('can navigate to "Login" w/ browser location URL change', fakeAsync(() => {
    location.go('/login');
    advance();
    expectPathToBe('/login');
    expectElementOf(LoginComponent);

    page.expectEvents([
      [ r.NavigationStart, '/login' ], [ r.RoutesRecognized, '/login' ],
      [ r.NavigationEnd, '/login' ]
    ]);
  }));
});

////// Helpers /////////

/** Wait a tick, then detect changes */
function advance(): void {
  tick();
  fixture.detectChanges();
}

function createComponent() {
  fixture = TestBed.createComponent(AppComponent);
  comp    = fixture.componentInstance;

  const injector = fixture.debugElement.injector;
  location       = injector.get(Location) as SpyLocation;
  router         = injector.get(Router);
  router.initialNavigation();

  advance();

  page = new Page();
}

class Page {
  registrationLinkDe: DebugElement;
  usersLinkDe: DebugElement;
  homeLinkDe: DebugElement;
  loginLinkDe: DebugElement;
  recordedEvents: any[] = [];

  // for debugging
  comp: AppComponent;
  router: Router;
  fixture: ComponentFixture<AppComponent>;

  expectEvents(pairs: any[]) {
    const events = this.recordedEvents;
    expect(events.length).toEqual(pairs.length, 'actual/expected events length mismatch');
    for (let i = 0; i < events.length; ++i) {
      expect((<any>events[ i ].constructor).name).toBe(pairs[ i ][ 0 ].name, 'unexpected event name');
      expect((<any>events[ i ]).url).toBe(pairs[ i ][ 1 ], 'unexpected event url');
    }
  }

  constructor() {
    router.events.subscribe(e => this.recordedEvents.push(e));
    const links = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    this.homeLinkDe         = links[ 0 ];
    this.usersLinkDe        = links[ 1 ];
    this.loginLinkDe        = links[ 2 ];
    this.registrationLinkDe = links[ 3 ];

    // for debugging
    this.comp    = comp;
    this.fixture = fixture;
    this.router  = router;
  }
}

function expectPathToBe(path: string, expectationFailOutput?: any) {
  expect(location.path()).toEqual(path, expectationFailOutput || 'location.path()');
}

function expectElementOf(type: Type<any>): any {
  const el = fixture.debugElement.query(By.directive(type));
  expect(el).toBeTruthy('expected an element for ' + type.name);
  return el;
}
