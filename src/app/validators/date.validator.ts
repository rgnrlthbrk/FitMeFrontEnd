import { FormControl } from '@angular/forms';

export function validDate(control: FormControl): { [key: string]: any } {
  const germanDatePattern = /^\d{4}-\d{1,2}-\d{1,2}$/i;
  if (!control.value.match(germanDatePattern)) {
    return { required: true };
  }
  return { required: false };
}

export function minimumOneMonth(control: FormControl): { [key: string]: any } {
  const germanDatePattern = /^\d{4}-\d{1,2}-\d{1,2}$/;
  if (control.value.match(germanDatePattern)) {
    const tmpDate = new Date(control.value); // diet should be 1 month!
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 31);
    return { minimumOneMonth: !(endDate <= tmpDate) };
  } else {
    return { minimumOneMonth: true };
  }
}
