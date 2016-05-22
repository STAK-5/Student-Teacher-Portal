/**
 * Created by syedmuhammadtaha on 3/14/16.
 */

myApp.directive('passwordConfirm', function () {
    return {
        restrict: 'A',
        scope: {
            matchTarget: '=',
        },
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var validator = function(value){
                ctrl.$setValidity('match', value === scope.matchTarget);
                return value;
            }

            ctrl.$parsers.unshift(validator);
            ctrl.$formatters.push(validator);
            scope.$watch('matchTarget', function (newVal, OldVal) {
                validator(ctrl.viewValue);
            });
        }
    };
});
