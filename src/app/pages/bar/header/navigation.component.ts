import { Component } from '@angular/core';
import { Link } from '../../../beans/link';

@Component({
  selector:    'nav-bar',
  templateUrl: './navigation.component.html',
  styleUrls:   [ './navigation.component.css' ],
  providers:   [ Link ]
})

export class NavigationComponent {
  get links(): any {
    return this._links;
  }

  private _links: any;

  constructor() {
    this._links = [
      new Link('Users', '/users', '', 'nav navbar-nav', true),
      new Link('Login', '/login', 'glyphicon glyphicon-log-in', 'nav navbar-nav navbar-right', true),
      new Link('Profile', '/login', 'glyphicon glyphicon-log-in', 'nav navbar-nav navbar-right', false),
    ];

  }
}
