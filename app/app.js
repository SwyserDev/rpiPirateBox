"use strict";

var rpiApp = angular.module('rpiApp', ['ngRoute', 'ngMaterial']);

rpiApp.config(function($routeProvider){
  $routeProvider.
  when('/home', {
      templateUrl: 'app/views/homeView.html',
      controller: 'HomeController'
  }).
  when('/photos', {
      templateUrl: 'app/views/photosView.html',
      controller: 'PhotosController'
  }).
  when('/messages', {
      templateUrl: 'app/views/messagesView.html',
      controller: 'MessagesController'
  }).
  otherwise({
      redirectTo: '/home'
  });
});
