import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { RegistrationBean } from './registration.bean';
import { Registration } from './registration.interface';
import { SubscribeForm } from '../../services/subscribeform.service';

import { emailValidator, matchingPasswords } from '../../validators/index';

@Component({
  selector:    'registration-custom',
  templateUrl: './registration.component.html',
  styleUrls:   [ './registration.component.css' ],
  providers:   [ RegistrationBean, SubscribeForm ]
})

export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(public registrationBean: RegistrationBean,
              private fb: FormBuilder,
              private form: SubscribeForm,
              private http: Http) {

  }

  onSubmit(form: Registration): void {
    this.http
      .post('/registration', form)
      .subscribe(
        data => {
          // some handling
        },
        err => {
          console.log('Something went wrong!');
          console.log(err);
        }
      );
  }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      username:  [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(5) ]) ],
      email:     [ '', Validators.compose([ <any>Validators.required, emailValidator ]) ],
      password:  [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(4) ]) ],
      cpassword: [ '', <any>Validators.required ]
    }, { validator: matchingPasswords('password', 'cpassword') });

    this.form.subcribeToFormChanges(this.registrationForm);
  }
}
