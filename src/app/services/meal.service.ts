import { Injectable } from '@angular/core';
import { UserProfileBean } from '../pages/userprofile_page/userprofile.bean';

@Injectable()
export class MealService {
  get carouselContent(): UserProfileBean {
    return this._carouselContent;
  }

  set carouselContent(value: UserProfileBean) {
    this._carouselContent = value;
  }

  get carouselImageArr(): any {
    return this._carouselImageArr;
  }

  set carouselImageArr(value: any) {
    this._carouselImageArr = value;
  }

  get food_data_obj(): any {
    return this._food_data_obj;
  }

  set food_data_obj(value: any) {
    this._food_data_obj = value;
  }

  constructor() {

  }

  private _carouselImageArr: any;
  private _carouselContent: UserProfileBean;
  private _food_data_obj: any;

}

