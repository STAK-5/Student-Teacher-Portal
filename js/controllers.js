/**
 * Created by syedmuhammadtaha on 3/14/16.
 */

myApp.controller('mainController', ['$scope', function($scope){

}]);

myApp.controller('teacherLoginController', ['$scope' ,'$log', function($scope, $log){
    $scope.teacherEmail = '';
    $scope.teacherPassword = '';
}]);

myApp.controller('studentLoginController', ['$scope' ,'$log','$http' ,function($scope, $log, $http){

    $scope.studentLoginEmail = '';
    $scope.studentLoginPassword = '';
    /*
     $scope.s_response = function(){
     console.log($scope.password, $scope.email);
     $http.post('/api/login', {email: $scope.email, pwd: $scope.password})
     .success(function(res){
     console.log(res);
     }).error(function(data, status){
     console.log('error =>',data);
     console.log()
     });
     }*/
}]);

myApp.controller('confirmationController', ['$scope', function($scope){
    $scope.officialRollNo = '';
    $scope.signupName = '';
    $scope.signupEmail = '';
    $scope.signupPassword= '';
    $scope.signupPasswordCheck = '';

}]);

myApp.controller('dashboardController', ['$scope', function($scope){

}]);

