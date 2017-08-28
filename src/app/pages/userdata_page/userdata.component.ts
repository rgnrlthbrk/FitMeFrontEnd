import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserdataBean } from './userdata.bean';
import { SubscribeForm } from '../../services/subscribeform.service';
import { UserData } from './userdata.interface';
import { Allergen } from '../../beans/allergen.bean';
import { maxValue, minValue } from '../../validators/index';
import { UserService } from '../../services/user.service';

@Component({
  selector:    'userdata-custom',
  templateUrl: './userdata.component.html',
  styleUrls:   [ './userdata.component.css' ],
  providers:   [ UserdataBean, SubscribeForm ],
  animations:  [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})

export class UserDataComponent implements OnInit {

  public userDataForm: FormGroup;
  private allergens: Allergen[];
  private error: string;
  private userData: UserData;

  constructor(public userDataBean: UserdataBean,
              private fb: FormBuilder,
              private form: SubscribeForm,
              private userService: UserService) {
  }

  onSubmit(form: UserData): void {
    if (this.userDataForm.valid) {
      console.log(this.userData);
      if (!this.userData) {
        const something = this.userService
          .createSingleUserData(form)
          .then((result) => {
            console.log(result);
          })
          .catch(error => console.log(error));
        console.log('something');
        console.log(something);
      } else {
        const something = this.userService
          .updateSingleUserData(form)
          .then((result) => {
            console.log(result);
          })
          .catch(error => console.log(error));
        console.log('something');
        console.log(something);
      }

    } else {
      this.error = 'Username or password is incorrect';
    }
  }

  addAllergens(allergen: Allergen): void {
    if (this.allergens.indexOf(allergen) === -1) {
      this.allergens.push(allergen);
      this.setAllergens(this.allergens);
    }
  }

  removeAllergen(allergen: Allergen): void {
    this.allergens = this.allergens.filter((element) => {
      return element !== allergen;
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

  ngOnInit(): void {
    this.allergens = [];

    this.userDataForm = this.fb.group({
      age:    [ null, Validators.compose([ <any>Validators.required, minValue(3), maxValue(99) ]) ],
      height: [ null, Validators.compose([ <any>Validators.required, minValue(130), maxValue(260) ]) ],
      kilos:  [ null, Validators.compose([ <any>Validators.required, minValue(35), maxValue(350) ]) ],
      sex:    [ null, Validators.compose([ <any>Validators.required ]) ],

      activity:       [ null, Validators.compose([ <any>Validators.required ]) ],
      activityPeriod: [ null, Validators.compose([ <any>Validators.required ]) ],

      goals:    [ null, Validators.compose([ <any>Validators.required ]) ],
      period:   [ '', Validators.compose([ <any>Validators.required ]) ],
      allergic: this.fb.array([])
    });

    this.userService.getSingleUser()
      .then((result) => {
        this.userData = result;
        console.log(this.userData);
      })
      .catch(error => console.log(error));

    this.form.subcribeToFormChanges(this.userDataForm);
  }
}
