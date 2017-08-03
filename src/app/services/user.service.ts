import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../beans/user';

@Injectable()
export class UserService {

  private headers  = new Headers({ 'Content-Type': 'application/json' });
  private usersUrl = 'users';  // URL to web api

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
  getSingleUser(name: string): Promise<User[]> {
    const url = `${this.usersUrl}/${name}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  // Post
  createSingleUser(): Promise<User[]> {
    return this.http.post(this.usersUrl, { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as User)
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
  updateSingleUser(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
