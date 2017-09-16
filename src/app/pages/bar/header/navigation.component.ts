import { Component, OnInit } from '@angular/core';
import { Link } from '../link.bean';

@Component({
  selector:    'nav-bar',
  templateUrl: './navigation.component.html',
  styleUrls:   [ './navigation.component.css' ],
  providers:   [ Link ]
})

export class NavigationComponent implements OnInit{
  private _links: any;
  private _profileLinks: any;

  constructor() {
  }

  get links(): any {
    return this._links;
  }

  get profileLinks(): any {
    return this._profileLinks;
  }

  ngOnInit(): void {


    this._links = [
      new Link('Login',   '/login', 'glyphicon glyphicon-log-in', 'nav navbar-nav navbar-right', true),
      new Link('Profile', '/',      'glyphicon glyphicon-user',   'nav navbar-nav navbar-right', false),
    ];
    this._profileLinks = [
      new Link('Menu for tomorrow', '/user/:userName/tomorrow',  '', '', false),
      new Link('Edit profile', '/user',  '', '', false),
      new Link('Logout',       '/logout', '', '', false)
    ];
  }
}
