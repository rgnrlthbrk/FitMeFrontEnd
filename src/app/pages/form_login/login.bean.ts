import { Injectable } from '@angular/core';

@Injectable()
export class LoginBean {
  get passwordRequired(): string {
    return this._passwordRequired;
  }
  get nameRequired(): string {
    return this._nameRequired;
  }
  get google(): string {
    return this._google;
  }

  get facebook(): string {
    return this._facebook;
  }

  get signup(): string {
    return this._signup;
  }

  get login(): string {
    return this._login;
  }

  get username(): string {
    return this._username;
  }

  get forgottenpassword(): string {
    return this._forgottenpassword;
  }

  get btnlogin(): string {
    return this._btnlogin;
  }

  get or(): string {
    return this._or;
  }

  get password(): string {
    return this._password;
  }

  get placeholdercredentials(): string {
    return this._placeholdercredentials;
  }

  get placeholderpassword(): string {
    return this._placeholderpassword;
  }

  private _login: string;
  private _signup: string;
  private _facebook: string;
  private _google: string;
  private _username: string;
  private _forgottenpassword: string;
  private _btnlogin: string;
  private _or: string;
  private _password: string;
  private _placeholdercredentials: string;
  private _placeholderpassword: string;

  private _nameRequired: string;
  private _passwordRequired: string;

  constructor() {
    this._login                  = 'Please Log In, or ';
    this._signup                 = 'Sign Up';
    this._facebook               = 'Facebook';
    this._google                 = 'Google';
    this._username               = 'Username';
    this._password               = 'Password';
    this._forgottenpassword      = 'Forgot password?';
    this._btnlogin               = 'Log In';
    this._or                     = 'or';
    this._placeholdercredentials = 'Credentials';
    this._placeholderpassword    = 'Password';


    this._nameRequired = 'Username or E-mail is required.';
    this._passwordRequired = 'Password is required.';
  }
}
