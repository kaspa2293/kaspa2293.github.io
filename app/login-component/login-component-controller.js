var app = angular.module('login').controller('loginCtrl',function($scope,$state){
    $scope.login = function(){
        localStorage.username=document.getElementById("username").value;
        localStorage.password=document.getElementById("pwd").value;
        console.log("saved!!");
        $state.go('home.dashboard');

    };
  });