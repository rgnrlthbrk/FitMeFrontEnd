import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class SubscribeForm {
  public events: any[] = [];

  constructor() {
  }

  subcribeToFormChanges(form: FormGroup) {
    const myFormStatusChanges$ = form.statusChanges;
    const myFormValueChanges$  = form.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }
}
