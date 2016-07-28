(function(){
     angular.module('IHeartPet')
     .controller('SignupController', ['$scope', '$state', '$http', function($scope, $state, $http){

        $scope.createUser = function(){
        	$http.post('/api/user/signup', $scope.newUser).success(function(response){
        		console.log($scope.newUser);
        	}).error(function(error){
        		console.log(error);
        	})
        };

        //$scope.newUser = {email:"", password:""};
     }])
}())