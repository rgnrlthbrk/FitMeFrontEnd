import { Component } from '@angular/core';
import { RegistrationBean } from './RegistrationBean';

@Component({
  selector:    'registration-custom',
  templateUrl: './registration.component.html',
  styleUrls:   [ './registration.component.css' ],
  providers:   [ RegistrationBean ]
})

export class RegistrationComponent {
  constructor(public registrationBean: RegistrationBean) {
  }

}
