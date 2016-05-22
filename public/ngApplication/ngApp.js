var app = angular.module('app', []);

app.controller('controller1', ['$scope', '$log',function($scope, $log){
    $scope.name = 'Saad Abbasi';

    $scope.showname = function(){
        $log.log('Hello world');
    }
} ]);