import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'userprofile-custom',
  templateUrl: './userprofile.component.html',
  styleUrls:   [ './userprofile.component.css' ],
})

export class UserProfileComponent implements OnInit {

  username: any;

  constructor() {
  }


  ngOnInit(): void {
    console.log('kvo stava bratmiii??')
    const userName = localStorage.getItem('currentUser');
    if (userName) {
      this.username = userName;
    } else {
      this.username = 'Bai hui';
    }
  }
}
