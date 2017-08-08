import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationBean {
  get labelConfirmPassword(): string {
    return this._labelConfirmPassword;
  }

  get labelPassword(): string {
    return this._labelPassword;
  }

  get labelEmail(): string {
    return this._labelEmail;
  }

  get labelUsername(): string {
    return this._labelUsername;
  }

  get notEqualPasswords(): string {
    return this._notEqualPasswords;
  }

  get placeholderUsername(): string {
    return this._placeholderUsername;
  }

  get placeholderEmail(): string {
    return this._placeholderEmail;
  }

  get placeholderPassword(): string {
    return this._placeholderPassword;
  }

  get placeholderConfirmPassword(): string {
    return this._placeholderConfirmPassword;
  }

  get submit(): string {
    return this._submit;
  }

  get title(): string {
    return this._title;
  }

  private _title: string;
  private _placeholderUsername: string;
  private _placeholderEmail: string;
  private _placeholderPassword: string;
  private _placeholderConfirmPassword: string;
  private _submit: string;
  private _notEqualPasswords: string;

  private _labelUsername: string;
  private _labelEmail: string;
  private _labelPassword: string;
  private _labelConfirmPassword: string;

  constructor() {
    this._submit                     = 'Submit';
    this._title                      = 'Please register';
    this._notEqualPasswords          = 'The passwords are not the same !';

    this._placeholderUsername        = 'your_username_01';
    this._placeholderEmail           = 'your@mail.com';
    this._placeholderPassword        = '******';
    this._placeholderConfirmPassword = '******';

    this._labelUsername        = 'Username: ';
    this._labelEmail           = 'E-mail: ';
    this._labelPassword        = 'Password: ';
    this._labelConfirmPassword = 'Confirm password: ';
  }
}
