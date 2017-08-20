///<reference path="../../../../node_modules/@angular/core/testing/src/test_bed.d.ts"/>
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { UserProfilePageComponent } from './userprofile.component';
import { UserprofileBean } from './userprofile.bean';

let app: UserProfilePageComponent;
let fixture: ComponentFixture<UserProfilePageComponent>;

describe('UserProfilePageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilePageComponent ],
      imports:      [
        FormsModule
      ],
      providers:    [
        UserprofileBean
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserProfilePageComponent);
        app     = fixture.componentInstance;
      });
  }));

  it('should test component', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should insert number in age input', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('#age'));
      const el    = input.nativeElement;

      expect(el.name).toBe('age');
    });
  }));

  xit('should test first input field', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const el    = input.nativeElement;

      el.value = 'someValue';
      el.dispatchEvent(new Event('input'));

      expect(fixture.componentInstance.userDataForm.controls.name).toBe('someValue');
    });
  }));

});
