import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../beans/user.interface';
import { UserData } from '../pages/userdata_page/userdata.interface';

@Injectable()
export class UserService {

  private headers  = new Headers({ 'Content-Type': 'application/json' });
  private usersUrl = 'user';  // URL to web api

  constructor(private http: Http) {
  }

  // Get
  getAllUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  // Get
  getSingleUser(): Promise<UserData> {
    console.log('getSingleUser');
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
  createSingleUserData(userData: UserData): Promise<UserData> {
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
      .then(() => userData)
      .catch(this.handleError);
  }

  // Delete
  removeSingleUser(id: number): Promise<User[]> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Put
  updateSingleUserData(userData: UserData): Promise<UserData> {
    console.log('updateSingleUserData');
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
      .then(() => userData)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
