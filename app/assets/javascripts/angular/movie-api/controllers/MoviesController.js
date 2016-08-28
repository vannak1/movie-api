angular.module('jnecMovies')
  .controller('MoviesController', ['$scope', 'movies', function($scope, movies){
    $scope.movies = movies;
  }]);
