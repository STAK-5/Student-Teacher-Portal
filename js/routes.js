/**
 * Created by syedmuhammadtaha on 3/14/16.
 */

/*myApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'pages/index.html',
            controller: 'mainController'
        })

        .state('/login-student', {
            url: '/login-student',
            templateUrl: 'pages/login-student.html',
            controller: 'studentLoginController'
        })

        .state('/signup-student', {
            url: '/signup-student',
            templateUrl: 'pages/signup-student.html',
            controller: 'confirmationController'
        })

        .state('/teacher-login', {
            url: '/teacher-login',
            templateUrl: 'pages/login-teacher.html',
            controller: 'teacherLoginController'
        })

        .state('/dashboard-student', {
            url: '/dashboard-student',
            templateUrl: 'pages/dashboard-student.html',
            controller: 'dashboardController'
        })
});

*/

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

        .when('/dashboard-student', {
            templateUrl: 'pages/dashboard-student.html',
            controller: 'StudentDashboardController'
        })

        .when('/dashboard-teacher', {
            templateUrl: 'pages/dashboard-teacher.html',
            controller: 'teacherDashboardController'
        })

});