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
  private confirmPassword: string    = '';

  constructor(public registrationBean: RegistrationBean,
              public newUser: User) {
  }

  comparePasswords(): void {
    if (!this.newUser.password && !this.confirmPassword) {
      this.comparedPasswords = false;
    }
    if (this.newUser.password.length <= this.confirmPassword.length) {
      this.comparedPasswords = this.newUser.password !== this.confirmPassword;
      console.log('minavam' + this.comparedPasswords);
    } else {
      this.comparedPasswords = false;
    }
    this._comparedPasswordsChange.emit(this.comparedPasswords);
  }

  checkFormValid(valid: boolean): boolean {
    if (!this.comparedPasswords) {
      console.log('dejba');
      return true;
    }
    console.log('state: ' + this.comparedPasswords && !valid);
    return this.comparedPasswords && !valid;
  }

  addNewUser(): void {
    // #confirmPassword validation!
    console.log(this.newUser);
  }

}


