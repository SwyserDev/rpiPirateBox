(function() {
  'use strict';

  rpiApp.controller('PhotosController', function($scope, pirateFactory) {
    pirateFactory.getPhotos().then(function(response) {
      console.log(JSON.stringify(response.data));
      $scope.photos = response.data;
    });
  });
})();
