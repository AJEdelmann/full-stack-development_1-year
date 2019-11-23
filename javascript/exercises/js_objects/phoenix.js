//1. Create a variable that contains a JSON string. The properties of this JSON string should be about Joaquin Phoenix and should contain firstName, lastName, dateOFBirth, placeOfBirth, imdbRating, movies(this should be an empty array) and latestMovieTitle.
console.log('==============================')

let json = `{
    "firstName" : "Joaquin",
    "lastName" : "Phoenix",
    "dateOfBirth" : "12.12.1900",
    "placeOfBirth" : "NewYork",
    "imdbRating" : 2,
    "movies" : [],
    "latestMovieTitle": "Whatever"
}`;

console.log(json);
console.log('==============================')

// 2. Convert that JSON to an object.

let joa = JSON.parse(json)
console.log(joa);
console.log('==============================')

// 3. Add a function to the object above called updateImdbRating that takes as input a number and updates the object’s imdbRating.
joa.updateImdbRating = function (n) {
    this.imdbRating = n;  
};

// 4. Update his IMDB rating using the function above.
joa.updateImdbRating(4);
joa.updateImdbRating(6);
console.log(joa);
console.log('==============================')


// 5. Add a new property named lastMovie. It should be an object that contains the title of the movie and the year. 
//  {title: 'Gladiator', year: 2000} .
joa.lastMovie =  {title: 'Gladiator', year: 2000};
console.log(joa);
console.log('==============================')

// 6. Add a function called updateLatestMovie that takes an object as an input and edits the lastMovie and the movies array.
joa.updateLatestMovie = function (obj) {  
// obj = {title: ‘Walk the line’, year: 2005}
    // Update the last movie
    if(this.lastMovie.year < obj.year)
        this.lastMovie = obj;

    // Check if my array is empty
    if(this.movies.length === 0)
        this.movies.push(obj)

    // Update the movies array
    let t = obj.title;
    for(let i=0; i<this.movies.length; i++){
        if(this.movies[i].title === t)
            return;
        else if(i == this.movies.length - 1){
            this.movies.push(obj)
        }
    }

};

// 7. Update his lastMovie and movies using that function. Please avoid duplicates in the movie array. Use the below object to call updateLatestMovie.
// {title: ‘Walk the line’, year: 2005}
// let mv = {title: 'Walk the line', year: 2005};
// joa.updateLatestMovie(mv)
// console.log(joa);
// console.log('==============================')

// 8. Add a property called oscarsWon with the value of 0.
joa.oscarsWon = 0;

// 9. Make a function called updateOscarsCount that updates oscarsWon by one.
joa.updateOscarsCount = function(){
    this.oscarsWon++;
};

// 10. Call updateOscarsCount twice.
joa.updateOscarsCount();
joa.updateOscarsCount();
console.log(joa);
console.log('==============================')

// 11. Add a function called addMovies that will take an array of movies (please use the spread operator ...) and will add movies to the movies array.

joa.addMovies = function(arr) {
 for(let i=0; i<arr.length; i++){
    this.updateLatestMovie(arr[i]);
 }
};

// 12. Call the function three times with the below arrays. Make sure your movies array has no duplicates when you update it.

let movies = [
    {title: '8 mm', year: 1999},
    {title: '8 mm', year: 1999},
    {title: 'Buffalo Soldiers', year: 2001},
    {title: 'Quills', year: 2000}
   ];

let moreMovies = [
    {title: 'The Village', year: 2004},
    {title: 'Buffalo Soldiers', year: 2001},
    {title: 'Signs', year: 2002},
    {title: 'Walk the line', year: 2005}
   ];

let someMoreMovies = [
    {title: 'The Master', year: 2012},
    {title: 'Joker', year: 2019},
    {title: 'Inherent Vice', year: 2014},
    {title: 'Walk the line', year: 2005},
    {title: 'You Were Never Really Here', year: 2017},
    {title: 'The Immigrant', year: 2013}
   ];

joa.addMovies(movies);   
joa.addMovies(moreMovies);   
joa.addMovies(someMoreMovies);   
   
console.log(joa);
console.log('==============================')
   
// 13. 	Add a function called calculateNumberOfMovies that will calculate how many movies he made and it will add a new property to the initial object called totalMovies.
joa.calculateNumberOfMovies = function(){
    this.totalMovies = this.movies.length;
}

joa.calculateNumberOfMovies();   
   
console.log(joa);
console.log('==============================')
 

// 14. 	Everytime you call the addMovies function, which adds more movies to the object, it should update the totalMovies and it should also update the lastMovie with the latest movie based on the year of each movie.
