import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UserData } from '../pages/userdata_page/userdata.interface';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  // Get
  getUserData(name): Promise<UserData> {
    let username = JSON.parse(localStorage.getItem('currentUser')).username;
    const token    = JSON.parse(localStorage.getItem('currentUserToken')).token;
    if (name) {
      username = name;
    }
    return this.http.get('/user', {
      headers: new Headers({
        'Content-Type':   'application/json',
        'username':       username,
        'x-access-token': token
      })
    })
    .toPromise()
    .then((response) => {
      return response.json() as UserData;
    })
    .catch(this.handleError);
  }

  // Post
  createUserData(userData: UserData): Promise<any> {
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    const token    = JSON.parse(localStorage.getItem('currentUserToken')).token;
    return this.http
      .post('/user', userData, {
        headers: new Headers({
          'Content-Type':   'application/json',
          'username':       username,
          'x-access-token': token
        })
      })
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  // Put
  updateUserData(userData: UserData): Promise<any> {
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    const token    = JSON.parse(localStorage.getItem('currentUserToken')).token;
    return this.http
      .put('/user', userData, {
        headers: new Headers({
          'Content-Type':   'application/json',
          'username':       username,
          'x-access-token': token
        })
      })
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
