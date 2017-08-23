import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserprofileBean } from './userprofile.bean';
import { SubscribeForm } from '../../services/subscribeform.service';
import { UserData } from './userprofile.interface';
import { Allergen } from '../../beans/allergen.bean';
import { maxValue } from '../../validators/maxvalue.validator';
import { minValue } from '../../validators/minvalue.validator';
import { validate } from 'codelyzer/walkerFactory/walkerFn';
import { minimumOneMonth, validDate } from '../../validators/date.validator';

@Component({
  selector:    'userprofile-custom',
  templateUrl: './userprofile.component.html',
  styleUrls:   [ './userprofile.component.css' ],
  providers:   [ UserprofileBean, SubscribeForm ],
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

export class UserProfilePageComponent implements OnInit {

  public userDataForm: FormGroup;
  private allergens: Allergen[];

  constructor(public userBean: UserprofileBean,
              private fb: FormBuilder,
              private form: SubscribeForm) {
  }

  onSubmit(form: UserData) {
    console.log(form);
  }

  onSubmitAllergens(allergen: Allergen) {
    if (this.allergens.indexOf(allergen) === -1) {
      this.allergens.push(allergen);
      this.setAllergens(this.allergens);
    }
  }

  removeAllergen(allergen: Allergen) {
    console.log(allergen);
    this.allergens = this.allergens.filter((element) => {
      console.log(element);
      return element !== allergen;
    });
    this.setAllergens(this.allergens);
  }

  private setAllergens(allergens: Allergen[]) {
    console.log(allergens);
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
      sex:    [ null, Validators.compose([ <any>Validators.required  ]) ],

      goals:    [ null, Validators.compose([ <any>Validators.required ]) ],
      period:   [ '',   Validators.compose([ <any>Validators.required ]) ],
      allergic: this.fb.array([])
    });

    this.form.subcribeToFormChanges(this.userDataForm);
  }
}
