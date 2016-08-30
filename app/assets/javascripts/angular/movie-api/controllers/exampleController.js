angular.module('jnecMovies')

.controller('myServiceCtrl', function($scope, myService){
  $scope.data = {};
  $scope.updateArtist = function(){
    myService.setArtist($scope.data.artist);
  };

  $scope.submitArtist = function(){
    myService.callItunes()
      .then(function(data){
        $scope.data.artistData = data;
      }, function(data){
        alert(data);
      })
  }
});
