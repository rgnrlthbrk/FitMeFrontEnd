import { Component } from '@angular/core';
import { LoginBean } from './LoginBean';

@Component({
  selector:    'login-custom',
  templateUrl: './login.component.html',
  styleUrls:   [ './login.component.css' ],
  providers:   [ LoginBean ]
})

export class LoginComponent {

  constructor(public loginBean: LoginBean) {
  }

  // $scope.data = {};
  // $scope.login = () => {
  //  LoginService.loginUser($scope.data.username, $scope.data.password)
  //    .success((response) => {
  //    $state.go('users');
  // }).error((response) => {
  //    console.log('NOK!!!');
  //  return response;
  // });
  // };
}
