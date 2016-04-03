var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/splash.html',
        controller: 'MainController'
      })
      .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'MainController'
      })
      .when('/sessions', {
        templateUrl: 'partials/sessions.html',
        controller: 'MainController'
      })
      .when('/breakdown', {
        templateUrl: 'partials/breakdown.html',
        controller: 'MovesController'
      })
      .when('/stripes', {
        templateUrl: 'partials/stripes.html',
        controller: 'MainController'
      })
      .when('/faq', {
        templateUrl: 'partials/faq.html',
        controller: 'MainController'
      })
    $locationProvider.html5Mode(true);
});
