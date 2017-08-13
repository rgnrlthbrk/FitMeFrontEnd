import {
  Component,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector:    'userprofile-custom',
  templateUrl: './userprofile.component.html',
  styleUrls:   [ './userprofile.component.css' ],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})

export class UserProfilePageComponent {
  constructor() {
  }

}


