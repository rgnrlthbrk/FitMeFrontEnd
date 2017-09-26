import { Component } from '@angular/core';

import { SessionService } from './services/session.service';
import { AuthenticationService } from './services/authentication.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   [ './app.component.css' ]
})
export class AppComponent {

  constructor(private sessionService: SessionService,
              private authenticationService: AuthenticationService) {

    const isLogged = this.sessionService.isUserLogged;
    if (!isLogged) {
      this.authenticationService.logout();
    }
  }
}
