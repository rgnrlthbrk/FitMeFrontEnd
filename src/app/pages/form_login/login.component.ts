import { Component, OnInit } from '@angular/core';
import { LoginBean } from './login.bean';
import { LoginMock } from './login.mock';

import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscribeForm } from '../../services/subscribeform.service';
import { Login } from './login.interface';

@Component({
  selector:    'login-custom',
  templateUrl: './login.component.html',
  styleUrls:   [ './login.component.css' ],
  providers:   [ LoginBean, LoginMock, SubscribeForm ]
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(public loginBean: LoginBean,
              public loginMock: LoginMock,
              private fb: FormBuilder,
              private form: SubscribeForm,
              public navbarService: NavbarService,
              public router: Router) {
  }

  onSubmit(form: Login): void {
    console.log(form);

    if (this.loginForm.valid) {
      const credentials = form.usernameEmail.trim();
      const password    = form.password.trim();
      if (!credentials || !password) {
        return;
      }

      let navigate = '/login';
      if (this.loginMock.credentials === credentials &&
        this.loginMock.password === password) {
        navigate = '/users';
        this.navbarService.logUser(true);
      } else {
        this.navbarService.logUser(false);
      }

      this.router.navigate([ navigate ]);
    }
  }

  ngOnInit(): void {
    console.log('LoginComponent');

    this.loginForm = this.fb.group({
      usernameEmail: [ '', Validators.compose([ <any>Validators.required ]) ],
      password:      [ '', Validators.compose([ <any>Validators.required ]) ],
    });

    this.form.subcribeToFormChanges(this.loginForm);
  }
}
