app.controller("MainController", function($scope, $http, breakService){
  $scope.oauth = function(){
    OAuth.initialize('j5M_X54Ak-3-aOAdqohn_SMQsrI');
    OAuth.popup('facebook')
    .done(function(result) {
    result.me()
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
  window.onload = function() {
    dragula([document.getElementById('left1'), document.getElementById('right1')])
  };
})

app.controller('SessionController', function($scope, $http, breakService){
  breakService.getMoves().then(function(payload){
    $scope.movesCollection = payload.data;
  })
})

app.controller('StripesController', function($scope, $http, breakService){
  breakService.getStripes().then(function(payload){
    $scope.stripesCollection = payload.data;
  })
})
