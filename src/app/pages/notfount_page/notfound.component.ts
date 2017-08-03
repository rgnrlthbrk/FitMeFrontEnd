import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector:    'my-app',
  templateUrl: './notfound.component.html',
})
export class PageNotFoundComponent {
  constructor(private _router: Router) {
  }

  goBack(): void {
    this._router.navigate(['/home']);
  }
}
