(function(){
  'use strict';

  rpiApp.controller('RootController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
  }]);


})();
