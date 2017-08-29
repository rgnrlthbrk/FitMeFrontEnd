import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector:    'my-app',
  templateUrl: './pagenotfound.component.html',
})
export class PageNotFoundComponent {
  constructor(private _router: Router) {
  }

  goBack(): void {
    this._router.navigate([ '/home' ]);
  }
}
