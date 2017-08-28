import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { LoginBean } from './login.bean';
import { Login } from './login.interface';

import { AuthenticationService, SessionService, SubscribeForm } from '../../services/index';

@Component({
  selector:    'login-custom',
  templateUrl: './login.component.html',
  styleUrls:   [ './login.component.css' ],
  providers:   [ LoginBean, SubscribeForm ]
})

export class LoginComponent implements OnInit {

  private userLogged: boolean;
  public loginForm: FormGroup;
          subscription: Subscription;
          error = '';

  constructor(public loginBean: LoginBean,
              private fb: FormBuilder,
              private subscribeForm: SubscribeForm,
              public sessionService: SessionService,
              public router: Router,
              private authenticationService: AuthenticationService) {
    console.log('LoginComponent');
  }

  onSubmit(form: Login): void {

    if (this.loginForm.valid) {
      if (!form.username || !form.password) {
        this.error = 'Username or password is incorrect';
        return;
      }

      this.authenticationService.login(form)
        .toPromise()
        .then(result => {
          if (result === true) {
            this.sessionService.logUser(true);
            this.router.navigate([ '/user/' + form.username ]);
          } else {
            this.sessionService.logUser(false);
            this.error = 'Username or password is incorrect';
          }
        })
        .catch(
          () => {
            this.sessionService.logUser(false);
            this.error = 'Username or password is incorrect';
          }
        );
    }
  }

  ngOnInit(): void {

    this.subscription = this.sessionService.userLogged$.subscribe(
      (res) => {
        this.userLogged = res;
      }
    );

    this.loginForm = this.fb.group({
      username: [ '', Validators.compose([ <any>Validators.required ]) ],
      password: [ '', Validators.compose([ <any>Validators.required ]) ],
    });

    this.subscribeForm.subcribeToFormChanges(this.loginForm);
  }
}
