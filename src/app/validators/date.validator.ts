import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

export function validDate(control: FormControl): { [key: string]: any } {
  const germanDatePattern = /^\d{4}-\d{1,2}-\d{1,2}$/i;
  if (!control.value.match(germanDatePattern)) {
    console.log(control.value);
    return { 'required': true };
  }
  return null;
}

export function minimumOneMonth(control: FormControl): { [key: string]: any } {
  const germanDatePattern = /^\d{4}-\d{1,2}-\d{1,2}$/;

  if (control.value.match(germanDatePattern)) {
    console.log('1');
    let tmpDate = new Date(control.value); // diet should be 1 month!
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 31);
    return { 'minimumOneMonth': !(endDate <= tmpDate)};
  } else {
    console.log('2');
    return { 'minimumOneMonth': true };
  }
}
