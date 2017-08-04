import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationBean {
  get notEqualPasswords(): string {
    return this._notEqualPasswords;
  }

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

  private _title: string;
  private _placeholderusername: string;
  private _placeholderemail: string;
  private _placeholderpassword: string;
  private _placeholderconfirmPassword: string;
  private _submit: string;
  private _notEqualPasswords: string;

  constructor() {
    this._title                      = 'Please register';
    this._placeholderusername        = 'Username';
    this._placeholderemail           = 'E-mail';
    this._placeholderpassword        = 'Password';
    this._placeholderconfirmPassword = 'Confirm password';
    this._submit                     = 'Submit';
    this._notEqualPasswords          = 'The passwords are not the same !';
  }
}
