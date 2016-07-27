// router

(function(){
    angular.module('IHeartPet', ['ui.router'])
        .config(function($stateProvider){
        
        $stateProvider
            .state('signUp', {
            url:"/signup",
            templateUrl: "app/signup/signup.html",
            controller: "SignupController"
        })
    });
    console.log("In app.js")
}());