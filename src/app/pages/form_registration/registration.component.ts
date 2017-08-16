import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegistrationBean } from './registration.bean';
import { Registration } from './registration.interface';
import { emailValidator } from '../../validators/email.validator';
import { matchingPasswords } from '../../validators/matchingpasswords.validator';

@Component({
  selector:    'registration-custom',
  templateUrl: './registration.component.html',
  styleUrls:   [ './registration.component.css' ],
  providers:   [ RegistrationBean ]
})

export class RegistrationComponent {
  public registrationForm: FormGroup;
  public events: any[] = [];

  constructor(public registrationBean: RegistrationBean,
              private fb: FormBuilder) {

    this.registrationForm = this.fb.group({
      name:      [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(5) ]) ],
      email:     [ '', Validators.compose([ <any>Validators.required, emailValidator ]) ],
      password:  [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(4) ]) ],
      cpassword: [ '', <any>Validators.required ]
    }, { validator: matchingPasswords('password', 'cpassword') });

    this.subcribeToFormChanges();
  }

  onSubmit(form: Registration, valid: boolean): void {
    // action="\registration" method="post"
    console.log(form);
  }

  subcribeToFormChanges() {
    const myFormStatusChanges$ = this.registrationForm.statusChanges;
    const myFormValueChanges$  = this.registrationForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }

}
