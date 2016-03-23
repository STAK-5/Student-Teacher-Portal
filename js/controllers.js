/**
 * Created by syedmuhammadtaha on 3/14/16.
 */

myApp.controller('mainController', ['$scope', function($scope){

}]);

myApp.controller('teacherLoginController', ['$scope' ,'$log', function($scope, $log){
    $scope.teacherEmail = '';
    $scope.teacherPassword = '';

}]);

myApp.controller('studentLoginController', ['$scope' ,'$log','$http', 'tabParser' ,function($scope, $log, $http, tabParser){

    $scope.studentLoginEmail = '';
    $scope.studentLoginPassword = '';

}]);

myApp.controller('confirmationController', ['$scope', 'tabParser',function($scope, tabParser){
    $scope.officialRollNo = '';
    $scope.signupName = '';
    $scope.signupEmail = '';
    $scope.signupPassword= '';
    $scope.signupPasswordCheck = '';

}]);

myApp.controller('studentDashboardController', ['$scope', function($scope){

}]);

myApp.controller('teacherDashboardController', ['$scope', function($scope){

}]);



myApp.service('tabParser' , function(){

});