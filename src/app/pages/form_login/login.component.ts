import { Component } from '@angular/core';

@Component({
  selector:    'login-custom',
  templateUrl: './login.component.html',
  styleUrls:   [ './login.component.css' ]
})

export class LoginComponent {
  constructor() {
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
