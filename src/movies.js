// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = movies =>{
  return movies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = array => {
  return array.filter((movie) =>
{
  const StevenSpielbergDirector = movie.director === "Steven Spielberg";
  const DramaMovie = movie.genre.includes("Drama");
  return StevenSpielbergDirector && DramaMovie;
}).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(arr) {
  let sum = arr.reduce(function(a, b){
    return a + (b.score || 0);
  },0);
  if(arr.length === 0){
    return 0;
  }
  let average = sum / arr.length

  
  average = average.toFixed(2);

  
  return Number(average);
  
}


 // Iteration 4: Drama movies - Get the average of Drama Movies

 const dramaMoviesScore = array => {
  const drama = array.filter((movie) => movie.genre.includes('Drama'));
  const averageDramaMovieScore = scoresAverage(drama);
  return averageDramaMovieScore;
};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

/* Function "orderByYear"
    √ should be declared
    × should return an array (5 ms)
    √ should return a new array (9 ms)
    × should return the element in a single element array (6 ms)
    × should return the new array in ascending order (2 ms)
    × should order movies with the same year by their title, alphabetically (1 ms) */


function orderByYear(array) {
  let sortedMovies = [...array]
    sortedMovies.sort((a,b) => {
   
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  })
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = array => {
  let sortedMovies = [...array];
  sortedMovies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  let movieTitles = sortedMovies.map((movie) => movie.title);
  return movieTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
