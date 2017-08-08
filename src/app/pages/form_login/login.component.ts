import { Component } from '@angular/core';
import { LoginBean } from './login.bean';
import { UserLogin } from '../../beans/userLogin';
import { LoginMock } from './login.mock';

import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector:    'login-custom',
  templateUrl: './login.component.html',
  styleUrls:   [ './login.component.css' ],
  providers:   [ LoginBean, UserLogin, LoginMock ]
})

export class LoginComponent {
  constructor(public loginBean: LoginBean,
              public user: UserLogin,
              public loginMock: LoginMock,
              public navbarService: NavbarService,
              public router: Router) {
    console.log('LoginComponent');
  }

  submitLogin(credentials: string, password: string): void {
    credentials = credentials.trim();
    password    = password.trim();
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
