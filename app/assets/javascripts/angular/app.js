angular.module('jnecMovies', ['ui.router', 'templates'])
  .config(function($stateProvider){
    $stateProvider
    .state('index', {
      url: '/home',
      templateUrl: 'index.html',
      controller: 'AppController'
    })
    .state('index.weather', {
      url: '/weather',
      templateUrl: 'weather.html',
      controller: 'WeatherController'
    })
  });
