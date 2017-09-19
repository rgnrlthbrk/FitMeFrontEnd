import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserdataBean } from './userdata.bean';
import { UserData } from './userdata.interface';
import { Allergen } from './allergen.interface';
import { maxValue, minValue } from '../../validators/index';
import { UserService } from '../../services/index';

@Component({
  selector:    'userdata-custom',
  templateUrl: './userdata.component.html',
  styleUrls:   [ './userdata.component.css' ],
  providers:   [ UserdataBean ]
})

export class UserDataComponent implements OnInit {

  public userDataForm: FormGroup;
  private allergens: Allergen[];
  private error: string;
  public userData: UserData;
  private modal: any;
  private alert: any;

  constructor(public userDataBean: UserdataBean,
              private fb: FormBuilder,
              private userService: UserService) {
  }

  onSubmit(form: UserData): void {
    if (this.userDataForm.valid) {
      if (!this.userData) {
        this.userService
          .createUserData(form)
          .then((result) => {
            this.modal = result.json().message;
            this.alert = 'alert alert-success';
          })
          .catch(error => {
            this.modal = error.json().message;
            this.alert = 'alert alert-danger';
          });
      } else {
        const something = this.userService
          .updateUserData(form)
          .then((result) => {
            this.modal = result.json().message;
            this.alert = 'alert alert-success';
          })
          .catch(error => {
            this.modal = error.json().message;
            this.alert = 'alert alert-danger';
          });
      }

    } else {
      this.error = 'Username or password is incorrect';
    }
  }

  addAllergen(allergen: Allergen): void {
    const tmpAllergen = this.allergens.find((element) => {
      return element.name === allergen.name && element.value === allergen.value;
    });
    if (!tmpAllergen) {
      this.allergens.push(allergen);
      this.setAllergens(this.allergens);
    }
  }

  removeAllergen(allergen: Allergen): void {
    this.allergens = this.allergens.filter((element) => {
      return element.name !== allergen.name && element.value !== allergen.value;
    });
    this.setAllergens(this.allergens);
  }

  private setAllergens(allergens: Allergen[]): void {
    const allergenTmp       = allergens.map(allergen => this.fb.group(allergen));
    const allergenFormArray = this.fb.array(allergenTmp);
    this.userDataForm.setControl('allergic', allergenFormArray);
  }

  get allergensArray(): FormArray {
    return this.userDataForm.get('allergic') as FormArray;
  }

  private populateUserData() {
    setTimeout(() => {
      Object.keys(this.userDataForm.controls).forEach(key => {

        if ('allergic' === key && this.userDataForm.get(key) instanceof FormArray) {
          const object = this.userData[ key ];

          Object.keys(object).map((objectKey) => {
            this.addAllergen(object[objectKey] as Allergen);
          });
        } else {
          if (['userCalories', 'food_data', 'food_menu', 'food_menu_past'].indexOf(key) === -1) {
            this.userDataForm.get(key).markAsDirty();
            this.userDataForm.get(key).setValue(this.userData[ key ]);
          }
        }
      });
    }, 500);

  }

  ngOnInit(): void {
    this.allergens = [];

    this.userDataForm = this.fb.group({
      age:      [ null, Validators.compose([ <any>Validators.required, minValue(3), maxValue(99) ]) ],
      height:   [ null, Validators.compose([ <any>Validators.required, minValue(130), maxValue(260) ]) ],
      kilos:    [ null, Validators.compose([ <any>Validators.required, minValue(35), maxValue(350) ]) ],
      sex:      [ null, Validators.compose([ <any>Validators.required ]) ],
      allergic: this.fb.array([]),

      activityPeriod: [ null, Validators.compose([ <any>Validators.required ]) ],

      goals:  [ null, Validators.compose([ <any>Validators.required ]) ]
    });

    this.userService.getUserData()
      .then((result) => {
        this.userData = result;
        this.populateUserData();
      })
      .catch((error) => {
        console.log(error);
      });

  }

}
