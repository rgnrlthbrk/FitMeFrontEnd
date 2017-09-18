import { Injectable } from '@angular/core';

@Injectable()
export class ParseService {

  parseMenu(menu, name) {
    let obj = {};

    if (menu) {
      let arr = menu;
      console.log('arr')
      console.log(arr)
      obj['name'] = name;
      let first = arr.first;
      obj['first'] = this.convertReadableMeal(first);
      let second = arr.second;
      obj['second'] = this.convertReadableMeal(second);
      let drink = arr.drink;
      obj['drink'] = this.convertReadableDrink(drink);

      obj['imgArr'] = [
        (first.subMeal)? first.subMeal.image : null,
        (second.subMeal)? second.subMeal.image : null,
        (drink.subMeal)? drink.subMeal.image : null,
      ]
    }
    return obj;
  }

  private convertReadableMeal(obj) {
    // 3 types of quantity: ml, g and 1
    if (!obj.subMeal) return null;
    let typeOfQuantity = obj.subMeal.quantity;
    let mealStr = '';
    let a = {'0.25': 'quarter', '0.5': 'half', '0.75': '3/4'};
    if (typeOfQuantity.indexOf('ml') !== -1) {
      mealStr = obj.count * 100 + 'ml' + ' of fresh ' + obj.subMeal.name + ' containing ' + obj.calories+ ' calories';
    } else if (typeOfQuantity.indexOf('g') !== -1) {
      mealStr = obj.count * 100 + 'g' + ' of ' + obj.subMeal.name + ' containing ' + obj.calories+ ' calories';
    } else {
      let fraction = obj.count % 1;
      let number = '';
      if (a['' + fraction]) {
        if (Math.floor(obj.count)) {
          number = Math.floor(obj.count) + ' and a ' + a['' + fraction];
        }
        number = a['' + fraction];
      }
      mealStr = number + ' ' + obj.subMeal.name + ' containing ' + obj.calories+ ' calories';
    }
    return mealStr;
  }


  private convertReadableDrink (obj)  {
    // 3 types of quantity: ml, g and 1
    if (!obj.subMeal) return null;
    let typeOfQuantity = obj.subMeal.quantity;
    let mealStr = '';
    let a = {'0.25': 'quarter', '0.5': 'half', '0.75': '3/4'};
    if (typeOfQuantity.indexOf('ml') !== -1) {
      mealStr = obj.count * 100 + 'ml' + ' of fresh ' + obj.subMeal.name;
    } else if (typeOfQuantity.indexOf('g') !== -1) {
      mealStr = obj.count * 100 + 'g' + ' of ' + obj.subMeal.name;
    } else {
      let fraction = obj.count % 1;
      let number = '';
      if (a['' + fraction]) {
        if (Math.floor(obj.count)) {
          number = Math.floor(obj.count) + ' and a ' + a['' + fraction];
        }
        number = a['' + fraction];
      }
      mealStr = number + ' ' + obj.subMeal.name;
    }
    return mealStr;
  }
}
