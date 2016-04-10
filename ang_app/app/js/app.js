var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/splash.html',
        controller: 'MainController'
      })
      .when('/users/:id', {
        templateUrl: 'partials/dashboard.html',
        controller: 'UserController'
      })
      .when('/users/:id/sessions', {
        templateUrl: 'partials/sessions.html',
        controller: 'SessionController'
      })
      .when('/users/:id/breakdown', {
        templateUrl: 'partials/breakdown.html',
        controller: 'MovesController'
      })
      .when('/users/:id/stripes', {
        templateUrl: 'partials/stripes.html',
        controller: 'StripesController'
      })
      .when('/users/:id/faq', {
        templateUrl: 'partials/faq.html',
        controller: 'MainController'
      })
    $locationProvider.html5Mode(true);
});
