var app = angular.module('todoApp').controller('homeCtrl',function($scope,$state){
    $scope.initials=localStorage.username.split('')[0];
    $scope.gotoHome = function(){
        $state.go('home');
    };
    $scope.gotoDashboard = function(){
        $state.go('home.dashboard');
    };
    $scope.gotoProfile = function(){
        $state.go('home.profile');
    };
    $scope.logout = function(){
        $state.go('login');
    };
    $scope.showDropdown = false;
    // $scope.mytodoObj = {};
    // $scope.mytodoObj.name = '';
    // $scope.mytodoObj.description = '';
    // $scope.mytodoObj.checked = false;
    // $scope.list=[];
    // $scope.addData=function(){
    //     // $scope.obj={};
    //     // $scope.obj.name=$scope.name;
    //     //   $scope.obj.Description= angular.copy($scope.Description);
    //     //   $scope.list.push($scope.obj);
    //     $scope.list.push(angular.copy($scope.mytodoObj));
    //     $scope.mytodoObj = {};

    //   };
    //   $scope.delete=function($index)
    //   {
    //   $scope.list.splice($index,1);
    //   };
      
});
// $('ul.nav li.dropdown').hover(function() {
//     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
//   }, function() {
//     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
//   });