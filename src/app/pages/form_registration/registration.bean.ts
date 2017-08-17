import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationBean {
  get mismatchedPasswords(): string {
    return this._mismatchedPasswords;
  }
  get passwordMinlength(): string {
    return this._passwordMinlength;
  }
  get passwordRequired(): string {
    return this._passwordRequired;
  }
  get invalidEmail(): string {
    return this._invalidEmail;
  }
  get emailRequired(): string {
    return this._emailRequired;
  }
  get nameMinLength(): string {
    return this._nameMinLength;
  }
  get nameRequired(): string {
    return this._nameRequired;
  }

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

  private _labelUsername: string;
  private _labelEmail: string;
  private _labelPassword: string;
  private _labelConfirmPassword: string;

  private _nameRequired: string;
  private _nameMinLength: string;
  private _emailRequired: string;
  private _invalidEmail: string;
  private _passwordRequired: string;
  private _passwordMinlength: string;
  private _mismatchedPasswords: string;

  constructor() {
    this._submit                     = 'Submit';
    this._title                      = 'Please register';

    this._placeholderUsername        = 'your_username_01';
    this._placeholderEmail           = 'your@mail.com';
    this._placeholderPassword        = '******';
    this._placeholderConfirmPassword = '******';

    this._labelUsername        = 'Username: ';
    this._labelEmail           = 'E-mail: ';
    this._labelPassword        = 'Password: ';
    this._labelConfirmPassword = 'Confirm password: ';

    this._nameRequired = 'Name is required.';
    this._nameMinLength = 'Name has to be more than 5 symbols.';
    this._emailRequired = 'Email is required.';
    this._invalidEmail = 'Email is invalid.';
    this._passwordRequired = 'Password is required.';
    this._passwordMinlength = 'Password isn\'t long enough.';
    this._mismatchedPasswords = 'Passwords do not match.';
  }
}
