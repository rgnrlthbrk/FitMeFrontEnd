import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserprofileBean } from './userprofile.bean';
import { SubscribeForm } from '../../services/subscribeform.service';
import { UserData } from './userprofile.interface';
import { Allergen } from '../../beans/allergen.bean';

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
      console.log(element)
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
      age:    [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(1), <any>Validators.maxLength(2) ]) ],
      height: [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(3) ]) ],
      kilos:  [ '', Validators.compose([ <any>Validators.required, <any>Validators.minLength(2), <any>Validators.maxLength(3) ]) ],
      sex:    [ '', Validators.compose([ <any>Validators.required ]) ], // TODO: checkbox validator

      goals:    [ '', Validators.compose([ <any>Validators.required ]) ], // TODO: checkbox validator
      period:   [ '', Validators.compose([ <any>Validators.required ]) ], // TODO: dd/mm/yyyy validator
      allergic: this.fb.array([])
    });

    this.form.subcribeToFormChanges(this.userDataForm);
  }
}
