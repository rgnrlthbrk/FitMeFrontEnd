import { Component } from '@angular/core';
import { LoginBean } from './login.bean';
import { UserLogin } from '../../beans/userLogin';

@Component({
  selector:    'login-custom',
  templateUrl: './login.component.html',
  styleUrls:   [ './login.component.css' ],
  providers:   [ LoginBean, UserLogin]
})

export class LoginComponent {

  constructor(public loginBean: LoginBean,
              public user: UserLogin) {
  }

  submitLogin(credentials: string, password: string): void {
    credentials = credentials.trim();
    password    = password.trim();
    if (!credentials || !password) {
      return;
    }
    // this.userService
    //  .getSingleUser();

  }

  // ngOnInit(): void {
  //  this.route.paramMap
  //    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
  //    .subscribe(hero => this.hero = hero);
  // }

}
