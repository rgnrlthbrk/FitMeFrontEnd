import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Subscription } from 'rxjs/Subscription';
import { Link } from '../../../beans/link.bean';

@Component({
  selector:    'nav-user-bar',
  templateUrl: './navigationUser.component.html',
  styleUrls:   [ './navigationUser.component.css' ],
  providers:   [ Link ]
})

export class NavigationUserComponent implements OnInit, OnDestroy {

  @Input() fmLinks: Array<Link>;
  @Input() pLinks: Array<Link>;
           subscription: Subscription;

  private userLogged = false;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.subscription = this.sessionService.userLogged$.subscribe(
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

