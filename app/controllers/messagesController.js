(function(){
  'use strict';

  rpiApp.controller('MessageController', function($scope, pirateFactory){
      pirateFactory.getMessages().then(function(response) {
        $scope.messages = response.data;
      });
  });
})();
