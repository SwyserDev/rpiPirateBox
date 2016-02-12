(function() {
    'use strict';

    rpiApp.controller('RootController', ['$scope', '$mdSidenav', '$location', function($scope, $mdSidenav, $location) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.go = function(path) {
            $location.path(path);
        };
    }]);


})();
