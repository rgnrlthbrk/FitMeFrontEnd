import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'userprofile-custom',
  templateUrl: './userprofile.component.html',
  styleUrls:   [ './userprofile.component.css' ],
})

export class UserProfileComponent implements OnInit {
  private _username: any;

  constructor() {
    console.log('UserProfileComponent');
  }

  get username(): any {
    return this._username;
  }

  ngOnInit(): void {
    const userName = JSON.parse(localStorage.getItem('currentUser'));
    if (userName) {
      this._username = userName.username;
    } else {
      this._username = 'Username is null or not found.';
    }
  }
}
