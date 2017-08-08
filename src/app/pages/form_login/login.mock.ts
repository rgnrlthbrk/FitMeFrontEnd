export class LoginMock {
  get password(): string {
    return this._password;
  }
  get credentials(): string {
    return this._credentials;
  }
  private _credentials: string;
  private _password: string;

  constructor() {
    this._credentials = '123';
    this._password    = '123';
  }
}
