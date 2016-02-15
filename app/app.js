"use strict";

var rpiApp = angular.module('rpiApp', ['ngRoute', 'ngMaterial']);

rpiApp.config(function($routeProvider) {
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
    controller: 'MessageController'
  }).
  when('/upload', {
    templateUrl: 'app/views/uploadView.html',
    controller: 'UploadController'
  }).
  when('/about', {
    templateUrl: 'app/views/aboutView.html',
    controller: 'AboutController'
  }).
  otherwise({
    redirectTo: '/home'
  });
});


rpiApp.config(function($mdThemingProvider) {
    $mdThemingProvider
    .theme('default')
    .primaryPalette('brown')
    .accentPalette('light-blue')
    .warnPalette('red')
    .backgroundPalette('blue-grey');
});
