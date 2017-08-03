import { Injectable } from '@angular/core';

@Injectable()
export class User {
  id: number;
  name: string;
  password: string;
  email: string;
  authorisations: Object;
  creationDate: string;
}
