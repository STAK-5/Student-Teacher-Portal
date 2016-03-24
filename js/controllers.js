/**
 * Created by syedmuhammadtaha on 3/14/16.
 */



myApp.service('tabParser' , function(){

    this.value = 1;

});


myApp.controller('mainController', 'tabParser', ['$scope', function($scope, tabParser){

    $scope.value = tabParser.value;

    $scope.$watch('value', function() {
        tabParser.value = $scope.value;
    })

}]);

myApp.controller('teacherLoginController', ['$scope', 'tabParser', function($scope, tabParser){
    $scope.teacherEmail = '';
    $scope.teacherPassword = '';

    $scope.value = tabParser.value;

    $scope.$watch('value', function () {
        tabParser.value = $scope.value;
    });
}]);

myApp.controller('studentLoginController', ['$scope', 'tabParser' ,function($scope, tabParser){

    $scope.studentLoginEmail = '';
    $scope.studentLoginPassword = '';

    $scope.value = tabParser.value;

    $scope.$watch('value', function () {
        tabParser.value = $scope.value;
    });
}]);

myApp.controller('confirmationController', ['$scope', 'tabParser', '$log',  function($scope, tabParser, $log){
    $scope.officialRollNo = '';
    $scope.signupName = '';
    $scope.signupEmail = '';
    $scope.signupPassword= '';
    $scope.signupPasswordCheck = '';


}]);

myApp.controller('forgotController', ['$scope', function($scope){

}]);


myApp.controller('studentDashboardController', ['$scope', function($scope){

}]);

myApp.controller('teacherDashboardController', ['$scope', function($scope){

}]);


