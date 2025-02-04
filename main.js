const movies = [
    { name: 'Avatar', year: 2022, rating: 9 },
    { name: 'Bable', year: 2010, rating: 5 },
    { name: 'Shrek', year: 2009, rating: 9 },
    { name: 'Avatar 2', year: 2024, rating: 7 },
    { name: 'Mufassa ', year: 2024, rating: 8 }
]

// const mapMovies = movies.map((movie) => {
//     return { name: movie.name, year: movie.year, rating: movie.rating + 1 }
// })
// console.log(mapMovies);
// console.log(movies);


const sortedMovies = movies.sort((a, b) => {
    return a.rating - b.rating;
})
console.log('sortedMovies');
console.log(sortedMovies);

const age = 15;
const year = 2000;
age > 20 ? console.log("togri") : console.log('xato');
year > 1996 && console.log('togri tanlov');


