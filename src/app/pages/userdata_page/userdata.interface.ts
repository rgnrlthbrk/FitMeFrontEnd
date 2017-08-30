export interface UserData {
  // input fields - number
  age: number;
  height: number;
  kilos: number;

  // checkbox
  sex: string;
  goals: string;
  activity: string;
  activityPeriod: string;

  // data input
  period: string;

  // dropdown input
  allergic?: Array<string>;
}
