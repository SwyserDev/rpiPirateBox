"use strict";

var rpiApp = angular.module('rpiApp', ['ngRoute', 'ngMaterial']);

rpiApp.config(function($routeProvider){
  $routeProvider.
  when('/home', {
      templateUrl: 'app/views/homeView.html',
      controller: 'HomeController'
  }).
  otherwise({
      redirectTo: '/home'
  });
});
