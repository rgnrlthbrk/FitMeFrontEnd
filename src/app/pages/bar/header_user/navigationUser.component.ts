import { Component, Input, OnDestroy } from '@angular/core';
import { NavbarService } from '../../../services/navbar.service';
import { Subscription } from 'rxjs/Subscription';
import { Link } from '../../../beans/link';

@Component({
  selector:    'nav-user-bar',
  templateUrl: './navigationUser.component.html',
  styleUrls:   [ './navigationUser.component.css' ]
})

export class NavigationUserComponent implements OnDestroy {
  private _links: Array<Link>;
          subscription: Subscription;

  private userLogged = false;

  constructor(public navbarService: NavbarService) {
    this.subscription = navbarService.userLogged$.subscribe(
      (res) => {
        this.userLogged = res;
        for (let link of this._links) {
          if (link.nameLink === 'Login') {
            link.visible = !res;
          } else if (link.nameLink === 'Profile') {
            link.visible = res;
          }
        }
      }
    );
  }

  get links(): Array<Link> {
    return this._links;
  }

  @Input()
  set links(value: Array<Link>) {
    this._links = value;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}

