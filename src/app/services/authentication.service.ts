import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Login } from '../pages/form_login/login.interface';

@Injectable()
export class AuthenticationService {
  private token: any;

  constructor(private http: Http) {
    // set token if saved in local storage
    this.token       = JSON.parse(localStorage.getItem('currentUserToken'));
    if (this.token) {
      this.token = this.token.token;
    }
  }

  login(login: Login): Observable<boolean> {
    return this.http
      .post('/login', login)
      .map((response: Response) => {
        console.log(response.json());
        console.log(response.json().token);
        console.log(response.json() && response.json().token);
        const token = response.json() && response.json().token;
        if (token) {
          this.token = token;

          localStorage.setItem('currentUser', JSON.stringify({ username: login.username }));
          localStorage.setItem('currentUserToken', JSON.stringify({ token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    console.log('logging out');
    this.token       = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserToken');
  }
}
