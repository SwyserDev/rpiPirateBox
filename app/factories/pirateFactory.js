(function(){
  'use strict';

  rpiApp.factory('pirateFactory', function($http, $q){
      return {
          getMessages: function(){
              return $http.get('/api/messages');
          },
          getPhotos:  function(){
              return $http.get('/api/photos');
          }
      }
    });
})();
