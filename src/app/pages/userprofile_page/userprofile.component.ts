import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../services/index'

@Component({
             selector: 'userprofile-custom',
             templateUrl: './userprofile.component.html',
             styleUrls: ['./userprofile.component.css']
           })

export class UserProfileComponent implements OnInit {
  private _username: any;
  public content: any;
  public imgArr: any;
  public tabArr: any;
  public currentMenu: any;
  public wid: any;

  constructor(private userProfileService: MenuService) {
  }

  get username(): any {
    return this._username;
  }

  private cleanArray(actual) {
    let newArray = [];
    for (let i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  }

  selectMeal(meal) {
    this.tabArr.forEach((tmpmeal) => {
      if (meal.name === tmpmeal.name) {
        tmpmeal.btn = 'btn btn-primary';
        this.currentMenu = this.content.filter((element) => {
          return element.name === meal.name;
        });
        this.currentMenu = this.currentMenu[0];
        this.imgArr = this.cleanArray(this.currentMenu.imgArr);
      } else {
        tmpmeal.btn = 'btn btn-default';
      }
    });
    this.wid = (this.imgArr.length !== 3) ? 'col-md-6' : 'col-md-4';
  }

  ngOnInit(): void {
    const userName = JSON.parse(localStorage.getItem('currentUser'));
    if (!userName) {
      this._username = 'Username is null or not found.';
    } else {
      this._username = userName.username;
      this.userProfileService
          // .carouselContent()
          .getMenuData('user/' +this._username + '/today')
          .then((result) => {
            result['name'] = userName;
            this.content = result;
            this.currentMenu = this.content[0];
            this.imgArr = this.cleanArray(this.currentMenu.imgArr);
            this.wid = (this.imgArr.length !== 3) ? 'col-md-6' : 'col-md-4';

            this.tabArr = [];
            this.content.forEach((meal) => {
              if (meal.name) {
                let obj = { name: meal.name, btn: 'btn btn-default' };
                if (meal.name === 'breakfast') {
                  obj.btn = 'btn btn-primary';
                }
                this.tabArr.push(obj);
              }
            });
          })
          .catch((err) => {
            console.log('Error: ' + err);
          });
    }
  }
}
