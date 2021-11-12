var formValidation = angular.module('formValidation', []);
formValidation.controller('RegistrationController', ['$scope', function($scope){
    $scope.register = function(){
        $scope.message = 'Welcome ' + $scope.user.firstname + ' ' + $scope.user.lastname;
    };
}]);