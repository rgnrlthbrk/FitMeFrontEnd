import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { RegistrationBean } from './registration.bean';
import { Registration } from './registration.interface';

import { emailValidator, matchingPasswords } from '../../validators/index';

@Component({
  selector:    'registration-custom',
  templateUrl: './registration.component.html',
  styleUrls:   [ './registration.component.css' ],
  providers:   [ RegistrationBean ]
})

export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;
  public modal: any;
  public alert: any;

  constructor(public registrationBean: RegistrationBean,
              private fb: FormBuilder,
              private http: Http) {
  }

  onSubmit(form: Registration): void {

    this.http
      .post('/registration', form)
      .subscribe(
        data => {
          this.modal = data.json().message;
          this.registrationForm.reset();
          this.alert = 'alert alert-success';
        },
        err => {
          this.modal = err.json().message;
          this.alert = 'alert alert-danger';
        }
      );
  }

  ngOnInit(): void {
    this.modal = null;
    this.alert = null;

    this.registrationForm = this.fb.group({
      username:  [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(4) ]) ],
      email:     [ '', Validators.compose([ <any>Validators.required, emailValidator ]) ],
      password:  [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(4) ]) ],
      cpassword: [ '', <any>Validators.required ]
    }, { validator: matchingPasswords('password', 'cpassword') });

  }
}
