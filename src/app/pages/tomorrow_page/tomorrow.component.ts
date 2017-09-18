import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../services/index'
import { MealService } from '../../services/meal.service';

@Component({
             selector: 'tomorrow-custom',
             templateUrl: './tomorrow.component.html',
             styleUrls: ['./tomorrow.component.css']
           })

export class TomorrowComponent implements OnInit {
  public contentGetMenuData: any;
  public currentMeal: any;
  public imgArr: any;
  public tabArr: any;
  public bootstrapImageWidth: any;

  constructor(private userProfileService: MenuService,
              private mealService: MealService) {
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
        this.currentMeal = this.contentGetMenuData.filter((element) => {
          return element.name === meal.name;
        });
        this.currentMeal = this.currentMeal[0];
        this.imgArr = this.cleanArray(this.currentMeal.imgArr);
      } else {
        tmpmeal.btn = 'btn btn-default';
      }
    });
    this.bootstrapImageWidth = (this.imgArr.length !== 3) ? 'col-md-6' : 'col-md-4';
  }

  ngOnInit(): void {

    const userName = JSON.parse(localStorage.getItem('currentUser'));
    if (!userName) {
      // some error
    } else {

      this.userProfileService
          // .carouselContent()
          .getMenuData('tomorrowMenu')
          .then((menuData) => {
            menuData['name'] = userName;
            this.contentGetMenuData = menuData;
            this.currentMeal = menuData[0]; // because [ { }, { }, ... ]

            this.mealService.food_data_obj = this.contentGetMenuData;
            this.imgArr = this.cleanArray(this.currentMeal.imgArr);
            this.bootstrapImageWidth = (this.imgArr.length !== 3) ? 'col-md-6' : 'col-md-4';

            this.tabArr = [];
            this.contentGetMenuData.forEach((meal) => {
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
