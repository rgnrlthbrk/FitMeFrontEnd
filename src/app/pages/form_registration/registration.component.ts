import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegistrationBean } from './registration.bean';
import { Registration } from './registration.interface';
import { emailValidator } from '../../validators/email.validator';
import { matchingPasswords } from '../../validators/matchingpasswords.validator';
import { SubscribeForm } from '../../services/subscribeform.service';

@Component({
  selector:    'registration-custom',
  templateUrl: './registration.component.html',
  styleUrls:   [ './registration.component.css' ],
  providers:   [ RegistrationBean, SubscribeForm ]
})

export class RegistrationComponent implements OnInit{

  public registrationForm: FormGroup;

  constructor(public registrationBean: RegistrationBean,
              private fb: FormBuilder,
              private form: SubscribeForm) {

  }

  onSubmit(form: Registration): void {
    // action="\registration" method="post"
    console.log(form);
  }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      name:      [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(5) ]) ],
      email:     [ '', Validators.compose([ <any>Validators.required, emailValidator ]) ],
      password:  [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(4) ]) ],
      cpassword: [ '', <any>Validators.required ]
    }, { validator: matchingPasswords('password', 'cpassword') });

    this.form.subcribeToFormChanges(this.registrationForm);
  }
}
