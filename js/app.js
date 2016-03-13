/**
 * Created by syedmuhammadtaha on 2/24/16.
 */
var myApp = angular.module('myApp', ['ngRoute', ]);

myApp.config(function($routeProvider){
    $routeProvider

        .when('/', {
            templateUrl: 'pages/login-student.html',
            controller: 'studentLoginController'
        })

        .when('/teacher-login', {
            templateUrl: 'pages/login-teacher.html',
            controller: 'teacherLoginController'
        })

        .when('/signup-student', {
            templateUrl: 'pages/signup-student.html',
            controller: 'confirmationController'
        })

        .otherwise({
            templateUrl: 'pages/student.html'
        })
});

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
    $scope.signuPassword= '';

}])

