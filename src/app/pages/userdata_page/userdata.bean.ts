export class UserdataBean {
  get everyday(): string {
    return this._everyday;
  }
  get foursix(): string {
    return this._foursix;
  }
  get onethree(): string {
    return this._onethree;
  }
  get none(): string {
    return this._none;
  }
  get activityPeriod(): string {
    return this._activityPeriod;
  }
  get heavy(): string {
    return this._heavy;
  }
  get normal(): string {
    return this._normal;
  }
  get light(): string {
    return this._light;
  }
  get activity(): string {
    return this._activity;
  }

;
  get add(): string {
    return this._add;
  }

  get submit(): string {
    return this._submit;
  }

  get allergic(): string {
    return this._allergic;
  }

  get allergensList(): any {
    return this._allergensList;
  }

  get dateDiet(): string {
    return this._dateDiet;
  }

  get gain(): string {
    return this._gain;
  }

  get keep(): string {
    return this._keep;
  }

  get loose(): string {
    return this._loose;
  }

  get goals(): string {
    return this._goals;
  }

  get female(): string {
    return this._female;
  }

  get male(): string {
    return this._male;
  }

  get sex(): string {
    return this._sex;
  }

  get kilosNonValid(): string {
    return this._kilosNonValid;
  }

  get kilosRequired(): string {
    return this._kilosRequired;
  }

  get placeholderKilos(): string {
    return this._placeholderKilos;
  }

  get kilos(): string {
    return this._kilos;
  }

  get heightNonValid(): string {
    return this._heightNonValid;
  }

  get heightRequired(): string {
    return this._heightRequired;
  }

  get placeholderHeight(): string {
    return this._placeholderHeight;
  }

  get height(): string {
    return this._height;
  }

  get ageNonValid(): string {
    return this._ageNonValid;
  }

  get ageRequired(): string {
    return this._ageRequired;
  }

  get placeholderAge(): string {
    return this._placeholderAge;
  }

  get age(): string {
    return this._age;
  }

  get profile(): string {
    return this._profile;
  }

  private _age: string;
  private _profile: string;
  private _placeholderAge: string;
  private _ageRequired: string;
  private _ageNonValid: string;

  private _height: string;
  private _placeholderHeight: string;
  private _heightRequired: string;
  private _heightNonValid: string;

  private _kilos: string;
  private _placeholderKilos: string;
  private _kilosRequired: string;
  private _kilosNonValid: string;

  private _sex: string;
  private _male: string;
  private _female: string;

  private _goals: string;
  private _loose: string;
  private _keep: string;
  private _gain: string;

  private _dateDiet: string;
  private _dateDietNonValid: string;
  private _minimumOneMonth: string;

  private _allergic: string;

  private _allergensList: any;

  private _submit: string;
  private _add: string;

  private _activity: string;
  private _light: string;
  private _normal: string;
  private _heavy: string;

  private _activityPeriod: string;
  private _none: string;
  private _onethree: string;
  private _foursix: string;
  private _everyday: string;

  constructor() {
    this._profile = 'User Profile';

    this._age            = 'Enter your age: ';
    this._placeholderAge = 'Age between 3-99';
    this._ageRequired    = 'Please enter your age';
    this._ageNonValid    = 'Entered age is not valid';

    this._height            = 'Enter your height: ';
    this._placeholderHeight = 'In centimeters';
    this._heightRequired    = 'Please enter your height';
    this._heightNonValid    = 'Entered height is not valid';

    this._kilos            = 'Enter your weight: ';
    this._placeholderKilos = 'In kilograms';
    this._kilosRequired    = 'Please enter your weight';
    this._kilosNonValid    = 'Entered data is not valid';

    this._sex    = 'Select your sex: ';
    this._male   = 'Male';
    this._female = 'Female';

    this._activity = 'Select your current kind of activity: ';
    this._light    = 'Light cardio or yoga';
    this._normal   = 'Normal training or jogging';
    this._heavy    = 'Heavy lifting or CrossFit';

    this._activityPeriod = 'Select how many day per week you do your training: ';
    this._none            = 'None';
    this._onethree        = '1-3';
    this._foursix         = '4-6';
    this._everyday        = 'Everyday';

    this._goals = 'Select your diet plan: ';
    this._loose = 'Loose some fat';
    this._keep  = 'Keep current weight';
    this._gain  = 'Gain some muscles';

    this._dateDiet         = 'Select the ending period of the diet:';
    this._dateDietNonValid = 'Entered date is not valid';
    this._minimumOneMonth  = 'Diet must be minimum one month';

    this._allergic = 'Please select if allergic to something: ';

    this._allergensList = [
      {
        name:  'Nuts',
        value: 0
      },
      {
        name:  'Eggs',
        value: 1
      },
      {
        name:  'Fish and fish products',
        value: 2
      },
      {
        name:  'Soy and soy products',
        value: 3
      },
      {
        name:  ' Milk and dairy products',
        value: 4
      },
      {
        name:  'Shellfish',
        value: 5
      }
    ];

    this._submit = 'Submit';
    this._add    = 'Add';
  }
}
