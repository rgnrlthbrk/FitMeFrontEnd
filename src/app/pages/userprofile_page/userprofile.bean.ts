export class UserprofileBean {
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

  get dateDietNonValid(): string {
    return this._dateDietNonValid;
  }

  get placeholderDateDiet(): string {
    return this._placeholderDateDiet;
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
  private _placeholderDateDiet: string;
  private _dateDietNonValid: string;

  private _allergic: string;

  private _allergensList: any;

  private _submit: string;
  private _add: string;

  constructor() {
    this._profile = 'User Profile';

    this._age            = 'Enter age: ';
    this._placeholderAge = 'Enter age between 3-99';
    this._ageRequired    = 'Please enter your age';
    this._ageNonValid    = 'Entered age is not valid';

    this._height            = 'Enter height: ';
    this._placeholderHeight = 'Enter your height in centimeters';
    this._heightRequired    = 'Please enter your height';
    this._heightNonValid    = 'Entered height is not valid';

    this._kilos            = 'Enter your weight in kilograms: ';
    this._placeholderKilos = 'Enter your weight';
    this._kilosRequired    = 'Please enter your weight';
    this._kilosNonValid    = 'Entered data is not valid';

    this._sex    = 'Enter your sex: ';
    this._male   = 'Male';
    this._female = 'Female';

    this._goals = 'Select your diet plan: ';
    this._loose = 'Loose some fat';
    this._keep  = 'Keep current weight';
    this._gain  = 'Gain some muscles';

    this._dateDiet         = 'Select the ending period of the diet:';
    this._dateDietNonValid = 'Entered date is not valid';

    this._allergic = 'Please select if allergic to something: ';

    this._allergensList = [
      {
        name:      'Lactose',
        valueName: 'LactVal'
      },
      {
        name:      'Nuts',
        valueName: 'NutsVal'
      },
      {
        name:      'Meat',
        valueName: 'MeatVal'
      },
    ];

    this._submit = 'Submit';
    this._add    = 'Add';
  }
}
