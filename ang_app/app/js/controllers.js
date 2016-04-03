app.controller("MainController", function($scope, $http){
   // no instance variables here....
});

app.controller('MovesController', function($scope, $http, breakService){
  breakService.getMoves().then(function(payload){
    $scope.movesCollection = payload.data;
  })
})
