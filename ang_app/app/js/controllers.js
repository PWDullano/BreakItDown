app.controller("MainController", function($scope, $http){
   // no instance variables here....
});

app.controller('UserController', function($scope, $http, breakService){
  breakService.getUser().then(function(payload){
    $scope.users = payload.data;
  })
})

app.controller('MovesController', function($scope, $http, breakService){
  breakService.getMoves().then(function(payload){
    $scope.movesCollection = payload.data;
  })
})

app.controller('StripesController', function($scope, $http, breakService){
  breakService.getStripes().then(function(payload){
    $scope.stripesCollection = payload.data;
  })
})
