(function(){
  'use strict';

  rpiApp.controller('MessageController', function($scope){
      $scope.messages = [{
        avatar: 'http://api.adorable.io/avatars/285/swyser%40live.co.za',
        email: 'swyser@live.co.za',
        title: 'Yes yes!',
        message: 'Hey guys, I think this is going to be an awesome year full of the best of times with great projects!!',
        date: '2016-02-11'
      },
      {
        avatar: 'http://api.adorable.io/avatars/285/kovua%40yahoo.com',
        email: 'kovua@yahoo.com',
        title: 'Booya!',
        message: 'Sure buddy! I can\'t even keep your code together and you want to finish projects?',
        date: '2016-02-12'
      },
      {
        avatar: 'http://api.adorable.io/avatars/285/vinny%40gmail.com',
        email: 'vinny@gmail.com',
        title: 'Kovua Douche',
        message: 'Well, you seem to be a go getter?',
        date: '2016-02-13'
      }];
  });
})();
