import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'homepage-custom',
  templateUrl: './homepage.component.html',
  styleUrls:   [ './homepage.component.css' ]
})

export class HomepageComponent implements OnInit {
  private content: string;
  private message: string;
  constructor() {
  }

  ngOnInit(): void {
    this.message = 'FitMe';
    this.content = 'Your online menú';
  }
}
