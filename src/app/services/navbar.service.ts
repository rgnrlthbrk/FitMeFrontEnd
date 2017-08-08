import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class NavbarService {

  private userLogged                      = new Subject<boolean>();
  public userLogged$: Observable<boolean> = this.userLogged.asObservable();

  constructor() {
    console.log('NavbarService');
  }

  logUser(isUserLogged: boolean) {
    this.userLogged.next(isUserLogged);
  }
}
