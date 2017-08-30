import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private _isUserLogged                   = false;
  private userLogged                      = new Subject<boolean>();
  public userLogged$: Observable<boolean> = this.userLogged.asObservable();

  constructor() {
    console.log('SessionService');
  }

  get isUserLogged(): boolean {
    return this._isUserLogged;
  }

  logUser(isUserLogged: boolean) {
    this._isUserLogged = isUserLogged;
    console.log('SessionService.logUser');
    if (localStorage.getItem('currentUser') && localStorage.getItem('currentUserToken')) {
      console.log('logUser true');
      this._isUserLogged = true;
    }
    this.userLogged.next(this._isUserLogged);
  }
}
