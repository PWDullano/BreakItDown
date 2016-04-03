app.service('breakService', function($http){
  var breakService = {};

  breakService.getMoves = function(){
    // return $http.get('http://localhost:3000/moves')
    return $http.get('https://breakitdown.herokuapp.com/moves')
  }

  breakService.getUser = function(){
    // return $http.get('http://localhost:3000/users')
    return $http.get('https://breakitdown.herokuapp.com/users')
  }

  breakService.getStripes = function(){
    // return $http.get('http://localhost:3000/stripes')
    return $http.get('https://breakitdown.herokuapp.com/stripes')
  }

  return breakService;
})
