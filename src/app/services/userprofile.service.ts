import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UserProfileBean } from '../pages/userprofile_page/userprofile.bean';

@Injectable()
export class UserProfileService {

  constructor(private http: Http) {
  }

  // Get
  getUserProfileAllMenuData(): Promise<UserProfileBean> {
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    const token    = JSON.parse(localStorage.getItem('currentUserToken')).token;
    return this.http.get('/user/' + username, {
      headers: new Headers({
                             'Content-Type':   'application/json',
                             'username':       username,
                             'x-access-token': token
                           })
    })
               .toPromise()
               .then((response) => {
                 return response.json().content[0] as UserProfileBean;
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
