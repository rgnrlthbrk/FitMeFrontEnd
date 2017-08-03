import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationBean {
  get placeholderusername(): string {
    return this._placeholderusername;
  }

  get placeholderemail(): string {
    return this._placeholderemail;
  }

  get placeholderpassword(): string {
    return this._placeholderpassword;
  }

  get placeholderconfirmPassword(): string {
    return this._placeholderconfirmPassword;
  }

  get submit(): string {
    return this._submit;
  }

  get title(): string {
    return this._title;
  }

  private _placeholderusername: string;
  private _placeholderemail: string;
  private _placeholderpassword: string;
  private _placeholderconfirmPassword: string;
  private _submit: string;
  private _title: string;

  constructor() {
    this._title                      = 'Please register';
    this._placeholderusername        = 'Username';
    this._placeholderemail           = 'E-mail';
    this._placeholderpassword        = 'Password';
    this._placeholderconfirmPassword = 'Confirm password';
    this._submit                     = 'Submit';
  }
}
