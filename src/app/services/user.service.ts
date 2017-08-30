import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UserData } from '../pages/userdata_page/userdata.interface';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  // Get
  getSingleDataUser(): Promise<UserData> {
    console.log('getSingleDataUser');
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    const token    = JSON.parse(localStorage.getItem('currentUserToken')).token;
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
  createSingleUserData(userData: UserData): Promise<any> {
    console.log('createSingleUserData');
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
  updateSingleUserData(userData: UserData): Promise<any> {
    console.log('updateSingleUserData');
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    const token    = JSON.parse(localStorage.getItem('currentUserToken')).token;
    console.log(username);
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
