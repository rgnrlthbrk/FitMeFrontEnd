export interface Registration {
  username: string;
  email: string;
  passwords: {
    password: string;
    cpassword: string;
  };
}
