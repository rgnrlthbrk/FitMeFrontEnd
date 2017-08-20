import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../../../services/navbar.service';
import { Subscription } from 'rxjs/Subscription';
import { Link } from '../../../beans/link';

@Component({
  selector:    'nav-user-bar',
  templateUrl: './navigationUser.component.html',
  styleUrls:   [ './navigationUser.component.css' ],
  providers:   [ Link, NavbarService ]
})

export class NavigationUserComponent implements OnInit, OnDestroy {

  @Input() fmLinks: Array<Link>;
                  subscription: Subscription;

  private userLogged = false;

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.subscription = this.navbarService.userLogged$.subscribe(
      (res) => {
        this.userLogged = res;
        for (let link of this.fmLinks) {
          if (link.nameLink === 'Login') {
            link.visible = !res;
          } else if (link.nameLink === 'Profile') {
            link.visible = res;
          }
        }
      }
    );
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}

