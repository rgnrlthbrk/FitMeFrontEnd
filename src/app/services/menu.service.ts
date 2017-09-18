import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UserProfileBean } from '../pages/userprofile_page/userprofile.bean';

@Injectable()
export class MenuService {

  constructor(private http: Http) {
  }

  // Get
  getUserProfileAllMenuData(): Promise<UserProfileBean> {
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    const token = JSON.parse(localStorage.getItem('currentUserToken')).token;
    return this.http
               .get('/user/' + username,
                 {
                   headers: new Headers({
                                          'Content-Type': 'application/json',
                                          'username': username,
                                          'x-access-token': token
                                        })
                 })
               .toPromise()
               .then((response) => {
                 return response.json().content as UserProfileBean;
               })
               .catch(this.handleError);
  }


  // Get
  getMenuData(result): Promise<UserProfileBean> {
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    const token = JSON.parse(localStorage.getItem('currentUserToken')).token;
    return this.http
               .get(result,
                 {
                   headers: new Headers({
                                          'Content-Type': 'application/json',
                                          'username': username,
                                          'x-access-token': token
                                        })
                 })
               .toPromise()
               .then((response) => {
                 return response.json().content as UserProfileBean;
               })
               .catch(this.handleError);
  }

  // Put
  updateMenuData(content): Promise<any> {
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    const token = JSON.parse(localStorage.getItem('currentUserToken')).token;
    return this.http
               .put('/tomorrowMenu', content,
                    {
                      headers: new Headers({
                                             'Content-Type': 'application/json',
                                             'username': username,
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
