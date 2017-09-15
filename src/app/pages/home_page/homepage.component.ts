import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector:    'homepage-custom',
  templateUrl: './homepage.component.html',
  styleUrls:   [ './homepage.component.css' ]
})

export class HomepageComponent implements OnInit {
  private content: string;
  private message: string;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const username = JSON.parse(localStorage.getItem('currentUser'));
    const token    = JSON.parse(localStorage.getItem('currentUserToken'));

    if (username && token) {
      this.router.navigate([ '/user/' + username.username ]);
    }

    this.message = 'FitMe';
    this.content = 'Your online daily menú';
  }
}
