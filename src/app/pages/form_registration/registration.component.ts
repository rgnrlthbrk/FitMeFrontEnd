import { Component, EventEmitter, Output } from '@angular/core';
import { RegistrationBean } from './registration.bean';
import { User } from '../../beans/user';

@Component({
  selector:    'registration-custom',
  templateUrl: './registration.component.html',
  styleUrls:   [ './registration.component.css' ],
  providers:   [ RegistrationBean, User ]
})

export class RegistrationComponent {
  comparedPasswords                  = false;
  @Output() _comparedPasswordsChange = new EventEmitter<boolean>();

  constructor(public registrationBean: RegistrationBean,
              public newUser: User) {
  }

  comparePasswords(password: string): void {
    if (!this.newUser.password && !password) {
      this.comparedPasswords = false;
      this._comparedPasswordsChange.emit(this.comparedPasswords);
    }
    if (this.newUser.password.length <= password.length) {
      if (this.newUser.password === password) {
        console.log('Same password!');
      } else {
        this.comparedPasswords = true;
        this._comparedPasswordsChange.emit(this.comparedPasswords);
      }
    }
    this.comparedPasswords = false;
    this._comparedPasswordsChange.emit(this.comparedPasswords);
  }

  addNewUser(): void {
    // #confirmPassword validation!

    console.log(this.newUser);
  }
}
