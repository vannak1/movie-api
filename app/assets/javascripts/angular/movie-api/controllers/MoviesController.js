angular.module('jnecMovies')
  .controller('MoviesController', ['$scope', 'movieService', function($scope, movieService){
    $scope.data = {};
    $scope.updateMovieTitle = function(){
      movieService.setMovieTitle($scope.data.movieTitle);
    };

    $scope.submitMovieTitle = function(){
      movieService.callItunes()
        .then(function(data){
          $scope.data.movieData = data;
          console.log(data);
        }, function(data){
          alert(data);
        })
    }
  }]);
