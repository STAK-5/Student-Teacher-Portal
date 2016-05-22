/**
 * Created by syedmuhammadtaha on 3/14/16.
 */



myApp.service('tabParser', function () {

    this.value = 1;

});

myApp.service('emailParser', function(){
    this.email = '';    
})

myApp.controller('mainController', 'tabParser', ['$scope', function ($scope, tabParser) {

    $scope.value = tabParser.value;

    $scope.$watch('value', function () {
        tabParser.value = $scope.value;
    })

}]);

myApp.controller('teacherLoginController', ['$scope', 'tabParser', '$http','$location','emailParser', 
    function ($scope, tabParser, $http, $location, emailParser) {
    $scope.teacherEmail = '';
    $scope.teacherPassword = '';




    $scope.login = function () {
        $http.post('/api/login', {
            email: $scope.teacherEmail,
            pwd: $scope.teacherPassword
        })
            .success(function (data) {
                console.log(data)
                // success handler;
                emailParser.email = data;
                $scope.msg = data.msg;
                $scope.cls = 'alert-success text-center'
                $location.path('/dashboard-teacher')
            })
            .error(function (err) {
                // error handler 
                console.log('return error', err);
                $scope.msg = err.msg;
                $scope.cls = 'alert-danger text-center'
        })
    }

    $scope.value = tabParser.value;

    $scope.$watch('value', function () {
        tabParser.value = $scope.value;
    });

    $scope.register = function () {

        var teacher = {
            fullname: 'Mashkoor Ahmed',
            email: 'mashkoorah@yahoo.com',
            contact: '0300-0000002',
            subjects: ['Algebra', 'Maths', 'Differenitals'],
            department: ['CS', 'TE'],
            phd: false,
            pwd: 'password',
            tasks: []
        }

        $http.post('/api/register', teacher).success(function (data) {
            // success handler.
            console.log('SUCCESS');

        }).error(function (err) {
            console.log(err);
        })
    }

}]);

myApp.controller('studentLoginController', ['$scope', 'tabParser', '$http', '$route', '$location',
    function ($scope, tabParser, $http, $route, $location) {

        $scope.studentRollNo = '';
        $scope.studentLoginPassword = '';
        $scope.cls = '';
        $scope.msg = '';

        $scope.login = function () {

            $http.post('/api/login', {
                rollnum: $scope.studentRollNo,
                pwd: $scope.studentLoginPassword
            })
                .success(function (res) {
                    $scope.cls = 'alert-success text-center';
                    $scope.msg = res.msg;
                    $location.path('/dashboard-student');
                })
                .error(function (data) {
                    $scope.cls = 'alert-danger text-center';
                    $scope.msg = data.msg;
                })
        }


        $scope.value = tabParser.value;
        $scope.$watch('value', function () {
            tabParser.value = $scope.value;
        });
    }]);

myApp.controller('confirmationController', ['$scope', 'tabParser', '$log', '$http', '$location', '$route', function ($scope, tabParser, $log, $http, $location, $route) {
    $scope.officialRollNo = '';
    $scope.signupName = '';
    $scope.signupEmail = '';
    $scope.signupPassword = '';
    $scope.signupPasswordCheck = '';

    $scope.msg = '';
    $scope.cls = '';

    $scope.register = function () {
        $http.post('/api/register', {
            name: $scope.signupName,
            email: $scope.signupEmail,
            rollnum: $scope.officialRollNo,
            password: $scope.signupPassword
        })
            .success(function (res) {
                console.log('success returned.', res);
                $scope.msg = 'Access Granted! Loggin in...';
                $scope.cls = 'alert-success text-center';
                $location.path('/');
                // $route.reload('/')
            })
            .error(function (data, status) {
                console.log('error returened.', data);
                $scope.msg = 'Email or Rollnum already exists';
                $scope.cls = 'alert-danger text-center'
            });
    }


}]);

myApp.controller('forgotController', ['$scope', function ($scope) {

}]);


myApp.controller('studentDashboardController', ['$scope','$http', function ($scope, $http) {
    $scope.files = '';
    $http.get('/api/files').success(function(values){
        console.log(values);
        $scope.files = values;
    }).error(function(err){
        console.log(err);
    })
}]);

myApp.controller('teacherDashboardController', ['$scope','$http','emailParser', function ($scope, $http, emailParser) {
    
    // $scope.email = emailParser.email;
    $scope.tasks = '';
    $scope.task = '';
    $scope.reloadTasks = function(){
        $http.get('/api/tasks').success(function(data){
            console.log('data:', data );
            $scope.tasks = data;
            
        }).error(function(err){
            console.log('error: ', err);
        })
    }
    $scope.reloadTasks();



    console.log($scope.email);
    $scope.add = function(){
        $http.post('/api/add_tasks', {task: $scope.task}).success(function(data){
            $scope.task = '';
            $scope.reloadTasks();   
        }).error(function(err){
            console.log(err);
        })
    }
    
    $scope.remove = function(task){
        console.log("task: ", task);
        $http.post('/api/remove_task', {task: task}).success(function(data){
            $scope.reloadTasks();
        }).error(function(err){
            console.error('something bad happened: @/api/remove_task');
        })
    }       
    
}]);

