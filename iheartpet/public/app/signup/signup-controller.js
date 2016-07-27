(function(){
     angular.module('IHeartPet')
     .controller('SignupController', ['$scope', '$state', function($scope, $state){
        $scope.createUser = function(){};
        $scope.newUser = {email:"", password:""};
     }])
}())