app.service('breakService', function($http){
  var breakService = {};

  breakService.getMoves = function(){
    return $http.get('http://localhost:3000/moves')
    // return $http.get('https://breakitdown.herokuapp.com/moves')
  }

  breakService.getUser = function(user_id){
    console.log(user_id);
    return $http.get('http://localhost:3000/users/'+user_id, {method: "jsonp"})
    // return $http.get('https://breakitdown.herokuapp.com/users/'+id, {method: "jsonp"})
  }

  breakService.getStripes = function(){
    return $http.get('http://localhost:3000/stripes')
    // return $http.get('https://breakitdown.herokuapp.com/stripes')
  }


  return breakService;
})
