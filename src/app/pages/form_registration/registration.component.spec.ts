import { async, TestBed } from '@angular/core/testing';
import { RegistrationBean } from './registration.bean';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('RegistrationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports:      [
        FormsModule
      ],
      providers:    [
        RegistrationBean
      ]
    }).compileComponents();
  }));

  it('should test component', async(() => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const app     = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should be ok', async(() => {
    let fixture = TestBed.createComponent(RegistrationComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el    = input.nativeElement;

      expect(el.name).toBe('name');
    });
  }));


  it('should test first input field', async(() => {
    let fixture = TestBed.createComponent(RegistrationComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el    = input.nativeElement;

      el.value = 'someValue';
      el.dispatchEvent(new Event('input'));

      expect(fixture.componentInstance.registrationForm.controls.name).toBe('someValue');
    });
  }));

});
