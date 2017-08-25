import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterLinkStubDirective } from '../../../../testing/router-stubs';
import { NavigationComponent } from './navigation.component';
import { NavigationUserComponent } from '../header_user/navigationUser.component';

describe('NavigationComponent (templateUrl)', () => {

  let comp: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent, NavigationUserComponent, RouterLinkStubDirective ], // declare the test component
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);

    comp = fixture.componentInstance; // NavigationComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('nav'));
    el = de.nativeElement;
  });

  beforeEach(() => {
    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('nav to be loaded', () => {
    expect(el.textContent).not.toBeNull();
  });

  it('can get RouterLinks from template', () => {
    fixture.detectChanges();
    expect(links.length).toBe(3, 'should have 3 links');
    expect(links[ 0 ].linkParams).toBe('/home', '1st link should go to HomepageComponent');
    expect(links[ 1 ].linkParams).toBe('/user', '1st link should go to HomepageComponent');
    expect(links[ 2 ].linkParams).toBe('/login', '1st link should go to LoginComponent');
  });

  it('can click Users link in template', () => {
    fixture.detectChanges();
    const usersLinkDe = linkDes[ 1 ];
    const usersLink   = links[ 1 ];

    expect(usersLink.navigatedTo).toBeNull('link should not have navigated yet');

    usersLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(usersLink.navigatedTo).toBe('/user');
  });


  it('go to HomePage', () => {
    fixture.detectChanges();
    const homeLinkDe = linkDes[ 0 ];
    const homeLink   = links[ 0 ];

    expect(homeLink.navigatedTo).toBeNull('link should not have navigated yet');

    homeLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(homeLink.navigatedTo).toBe('/home');
  });

});

