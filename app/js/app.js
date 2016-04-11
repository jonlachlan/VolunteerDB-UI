var app = angular.module('grassRoots', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider){
   $urlRouterProvider.otherwise('/index') ;
    $stateProvider
        .state('index',{
               url:'/home'
               ,templateUrl: 'partials/partial-index.html'
               })
        .state('login',{
               url:'/login'
               ,templateUrl: 'partials/partial-login.html'
               })
     .state('register',{
               url:'/register'
               ,templateUrl: 'partials/partial-registration.html'
               });
});

app.controller('MainCtrl', function($scope){



});