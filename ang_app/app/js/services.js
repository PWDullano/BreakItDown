app.service('breakService', function($http){
  var breakService = {};

  breakService.getMoves = function(){
    return $http.get('http://localhost:3000/moves')
  }

  return breakService;
})
