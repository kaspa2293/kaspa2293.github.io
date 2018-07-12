var app = angular.module('dashboard').controller('dashboardCtrl',function($scope,$state){
    $scope.list=[];
    $scope.listObj={};
    $scope.listObj.todoTitle='';
    $scope.listObj.todoDesc='';
    $scope.desc='no content';
    // $scope.saveData=function()
    // {
    //         $scope.list.push(angular.copy($scope.listObj));
    // }
    // $scope.showDescription=function(index)
    // {
    //    // $scope.list.splice(index,1);
    //     $scope.Desc=$scope.list[index].todoDesc;
    // }
    // $scope.Delete=function(index)
    // {
    //     $scope.list.splice(index,1);
    // }
    $scope.mytodoObj = {};
    $scope.mytodoObj.name = '';
    $scope.mytodoObj.description = '';
    $scope.mytodoObj.checked = false;
    $scope.list=[];
    $scope.addData=function(){
        // $scope.obj={};
        // $scope.obj.name=$scope.name;
        //   $scope.obj.Description= angular.copy($scope.Description);
        //   $scope.list.push($scope.obj);
        $scope.list.push(angular.copy($scope.mytodoObj));
        $scope.mytodoObj = {};

      };
      $scope.delete=function($index)
      {
        $scope.list.splice($index,1);
        //  document.getElementById('desc1').innerHTML="no content";
         $scope.todoDescription = '';
      };
      $scope.todoDescription = '';
      $scope.qwer=false;
      $scope.showDesc=function(data)
      {    
        //  document.getElementById("delete"+index).hidden=false;
    //         if($scope.list[index].description!=undefined && $scope.list[index].description!= null && $scope.list[index].description!='')
    //             document.getElementById('desc1').innerHTML=$scope.list[index].description;
    //          else
    //          document.getElementById('desc1').innerHTML="no content";
    $scope.todoDescription = data.description;
    $scope.qwer=true;
    };

        $scope.leaveDesc=function()
        {
        $scope.todoDescription='';
        $scope.qwer=false;
        // document.getElementById("delete"+index).hidden=true;
           };

        $scope.showdelete=function(index){
         document.getElementById('deletebutton'+index).hidden=false;
         $scope.tododescription=$scope.list[index].description;
         document.getElementById("mydescription").hidden=false;
     } ;
     $scope.hidedelete=function(index){
        document.getElementById('deletebutton'+index).hidden=true;
        
        document.getElementById("mydescription").hidden=true;
    } ;
 });