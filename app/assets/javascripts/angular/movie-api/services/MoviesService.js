angular.module('jnecMovies')
  .service('movieService', function($http, $q){
    var baseUrl = 'https://itunes.apple.com/search?term=';
    var _movieTitle = '';
    var _finalUrl = '';

    var makeUrl = function(){
      _movieTitle = _movieTitle.split(' ').join('+');
      _finalUrl = baseUrl + _movieTitle + '&entity=movie&callback=JSON_CALLBACK';
      return _finalUrl;
    }

    this.setMovieTitle = function(movieTitle){
      _movieTitle = movieTitle;
      console.log(_movieTitle);
    }

    this.getMovieTitle = function(){
      return _movieTitle;
    }

    this.callItunes = function(){
      makeUrl();
      console.log(_finalUrl);
      var deferred = $q.defer();
      $http({
        method: 'JSONP',
        url: _finalUrl
      }).success(function(data){
        deferred.resolve(data);
      }).error(function(){
        deferred.reject('There was an error')
      })
      return deferred.promise;
    }
});
