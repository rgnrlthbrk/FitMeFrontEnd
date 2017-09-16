import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../services/index'

@Component({
             selector: 'tomorrow-custom',
             templateUrl: './tomorrow.component.html',
             styleUrls: ['./tomorrow.component.css']
           })

export class TomorrowComponent implements OnInit {
  private _username: any;
  public content: any;

  constructor(private userProfileService: MenuService) {
  }

  get username(): any {
    return this._username;
  }

  ngOnInit(): void {
    const userName = JSON.parse(localStorage.getItem('currentUser'));
    if (!userName) {
      this._username = 'Username is null or not found.';
    } else {
      this._username = userName.username;
      this.userProfileService
          // .getUserProfileAllMenuData()
          .getMenuData('tomorrow')
          .then((result) => {
            result['name'] = userName;
            this.content = result;
          })
          .catch((err) => {
            console.log('Error: ' + err);
          });
    }
  }
}
