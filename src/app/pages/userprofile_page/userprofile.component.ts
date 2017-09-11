import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './../../services/index'

@Component({
             selector: 'userprofile-custom',
             templateUrl: './userprofile.component.html',
             styleUrls: ['./userprofile.component.css'],
             providers: [UserProfileService]
           })

export class UserProfileComponent implements OnInit {
  private _username: any;
  public content: any;

  constructor(private userProfileService: UserProfileService) {
    console.log('UserProfileComponent');
  }

  get username(): any {
    return this._username;
  }

  private parseResult(result: any): any {
    let objArr = [];
    Object.keys(result).forEach((key) => {
      if (key !== 'username') {
        if (result[key]) {
          let arr = result[key];
          let randomIndex = Math.floor(Math.random() * arr.length);
          console.log(arr[randomIndex])
          let obj = {};
          obj['name'] = key;
          obj['first'] = this.convertReadableMeal(arr[randomIndex].first);
          obj['second'] = this.convertReadableMeal(arr[randomIndex].second);
          obj['drink'] = this.convertReadableMeal(arr[randomIndex].drink);
          objArr.push(obj);
        }
      }
    });
    // we need in order to be breakfast -> dinner
    return objArr.reverse();
  }

  private convertReadableMeal(obj: any): any {
    // 3 types of quantity: ml, g and 1
    if (!obj.subMeal) return null;
    let typeOfQuantity = obj.subMeal.quantity;
    let mealStr = '';
    let a = {'0.25': 'quarter', '0.5': 'half', '0.75': '3/4'};
    console.log('typeOfQuantity: '+typeOfQuantity );
    if (typeOfQuantity.indexOf('ml') !== -1){
      mealStr = obj.count*100 + 'ml' + ' of fresh ' + obj.subMeal.name + '; calories: ' + obj.calories;
    } else if (typeOfQuantity.indexOf('g') !== -1) {
      mealStr = obj.count*100 + 'g' + ' of ' +  obj.subMeal.name + '; calories: ' + obj.calories;
    } else {
      let fraction = obj.count % 1;
      let number = '';
      if (a[''+fraction]) {
        if (Math.floor(obj.count)) {
          number =  Math.floor(obj.count) + ' and a ' + a[''+fraction];
        }
        number = a[''+fraction];
      }
      mealStr = number + ' ' +  obj.subMeal.name + '; calories: ' + obj.calories;
    }
    return mealStr;
  }

  ngOnInit(): void {
    const userName = JSON.parse(localStorage.getItem('currentUser'));
    if (!userName) {
      this._username = 'Username is null or not found.';
    } else {
      this._username = userName.username;
      this.userProfileService
          .getUserProfileAllMenuData()
          .then((result) => {
            this.content = this.parseResult(result);
          })
          .catch((err) => {
            console.log('Error: ' + err);
          });
    }
  }
}
