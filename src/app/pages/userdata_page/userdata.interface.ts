export interface UserData {
  // input fields - number
  age: number;
  height: number;
  kilos: number;

  // checkbox
  sex: string;
  goals: string;
  activityPeriod: string;

  // dropdown input
  allergic?: Array<string>;
}
