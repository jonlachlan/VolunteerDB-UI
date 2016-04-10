var app = angular.module('grassRoots', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider){
   $urlRouterProvider.otherwise('/index') ;
    $stateProvider
        .state('index',{
               url:'/home'
               ,templateUrl: 'partial-index.html'
               })
        .state('login',{
               url:'/login'
               ,templateUrl: 'partial-login.html'
               })
     .state('register',{
               url:'/register'
               ,templateUrl: 'partial-registration.html'
               });
});

app.controller('MainCtrl', function($scope){



});