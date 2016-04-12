app.service('breakService', function($http){
  var breakService = {};

  breakService.getMoves = function(){
    return $http.get('http://localhost:3000/moves')
    // return $http.get('https://breakitdown.herokuapp.com/moves')
  }

  breakService.getUser = function(user_id){
    return $http.get('http://localhost:3000/users/'+user_id, {method: "jsonp"})
    // return $http.get('https://breakitdown.herokuapp.com/users/'+user_id, {method: "jsonp"})
  }

  breakService.getStripes = function(){
    return $http.get('http://localhost:3000/stripes')
    // return $http.get('https://breakitdown.herokuapp.com/stripes')
  }

  breakService.getSessions = function(){
    return $http.get('http://localhost:3000/sessions')
    // return $http.get('https://breakitdown.herokuapp.com/sessions')
  }

  breakService.newSession = function(data){
    return $http.post('http://localhost:3000/sessions', data)
    // return $http.post('https://breakitdown.herokuapp.com/sessions', data)
  }

  return breakService;
})
