export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  authorisations?: {};
  creationDate: string;
}
