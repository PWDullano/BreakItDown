app.service('breakService', function($http){
  var breakService = {};

  breakService.getMoves = function(){
    return $http.get('http://localhost:3000/moves')
  }

  breakService.getUser = function(){
    return $http.get('http://localhost:3000/users')
  }

  breakService.getStripes = function(){
    return $http.get('http://localhost:3000/stripes')
  }

  return breakService;
})
