angular.module('jnecMovies')
  .factory('movies', [function(){
    var o = {
      movies: [
        {
          title: 'A Game of Thrones: A Song of Ice and Fire',
          author: 'George R.R. Martin',
          isbn: '0553593714',
          review: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
          rating: 4,
          genres: { 'non-fiction': true, fantasy: true }
        }
      ]
    };
    return o;
  }]);
