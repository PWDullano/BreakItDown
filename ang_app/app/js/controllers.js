app.controller("MainController", function($scope, $http, breakService, $routeParams){
  $scope.oauth = function(){
    OAuth.initialize('j5M_X54Ak-3-aOAdqohn_SMQsrI');
    OAuth.popup('facebook')
    .done(function(result) {
    result.me(['firstname', 'lastname', 'email'])
    .done(function (response) {
        console.log(response);
    })
    .fail(function (err) {
        //handle error with err
    });
  })
  .fail(function (err) {
    //handle error with err
  });
  }

  $(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

});

app.controller('UserController', function($scope, $http, breakService, $routeParams){
  theId = $routeParams.id
  breakService.getUser(theId).then(function(payload){
    $scope.users = payload.data;
  })
})

app.controller('MovesController', function($scope, $http, breakService, $routeParams){
  theId = $routeParams.id
  breakService.getUser(theId).then(function(payload){
    $scope.users = payload.data;
  })
  breakService.getMoves().then(function(payload){
    $scope.movesCollection = payload.data;
  })
})

app.controller('SessionController', function($scope, $http, breakService, $routeParams, $window){
  theId = $routeParams.id
  breakService.getUser(theId).then(function(users){
    $scope.users = users.data;
  })
  breakService.getSessions().then(function(payload){
    $scope.sessionsCollection = payload.data;
  })
  $scope.session = {};
    $scope.createSession = function(){
      breakService.newSession($scope.session).then(function(stuff){
        $window.location.href = '/sessions';
      })
    }
  })

app.controller('StripesController', function($scope, $http, breakService, $routeParams){
  theId = $routeParams.id
  breakService.getUser(theId).then(function(payload){
    $scope.users = payload.data;
  })
  breakService.getStripes().then(function(payload){
    $scope.stripesCollection = payload.data;
    console.log($scope.stripesCollection);
  })
})
