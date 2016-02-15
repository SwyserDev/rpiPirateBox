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
      },
      {
        avatar: 'http://api.adorable.io/avatars/285/johan%40gmail.com',
        email: 'johan@gmail.com',
        title: 'Hahahahaha',
        message: 'Pro\'s be trippin!',
        date: '2016-02-13'
      },
      {
        avatar: 'http://api.adorable.io/avatars/285/sipho%40live.co.za',
        email: 'sipho@gmail.com',
        title: 'Come on guys!',
        message: 'Why you guys all so agro man? Just look at me? I have just created a conversation between 10 people on my own! Holy shit! Look, a crab...',
        date: '2016-02-13'
      },
      {
        avatar: 'http://api.adorable.io/avatars/285/wille.wagter%40jouma.co.za',
        email: 'wille.wagter@jouma.co.za',
        title: 'Happiness',
        message: 'It makes me unbelievably happy to you all you guys fight like thins...Okay, now I think I whould go see a shrink, and not the tipe that tells you stories and sends you some meds, I am talking about the type where you need some electrical stimulations! Yeaaa boy!!',
        date: '2016-02-13'
      }];
  });
})();
