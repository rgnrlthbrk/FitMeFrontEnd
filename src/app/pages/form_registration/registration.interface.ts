export interface Registration {
  name: string;
  email: string;
  passwords: {
    password: string;
    cpassword: string;
  };
}
