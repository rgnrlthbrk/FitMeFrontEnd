import { Component, OnInit } from '@angular/core';
import { AuthenticationService, SessionService } from '../../services/index';
import { Router } from '@angular/router';

@Component({
  selector:    'logout-custom',
  templateUrl: './logout.component.html',
  styleUrls:   [ './logout.component.css' ]
})

export class LogoutComponent implements OnInit {
  public returnMessage: string;
  public btnRedirect: string;

  constructor(private authenticationService: AuthenticationService,
              private sessionService: SessionService,
              private router: Router) {
    console.log('LogOutComponent');
  }

  public redirectLogin(): void {
    this.router.navigate([ '/login' ]);
  }

  ngOnInit(): void {
    this.returnMessage = 'See you soon!';
    this.btnRedirect   = 'To Log-In page';

    this.authenticationService.logout();
    this.sessionService.logUser(false);
  }
}
