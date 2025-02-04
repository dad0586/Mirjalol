const movies = [
    {name: 'Avatar' , year: 2022, rating: 9 },
    {name: 'Bable' , year: 2010, rating: 5 },
    {name: 'Shrek' , year: 2009, rating: 9 },
    {name: 'Avatar 2' , year: 2024, rating: 7 },
    {name: 'Mufassa ' , year: 2024, rating: 8 }
]

const filterMovies = movies.filter ((movie) => {
    return movie.year < 2015;
})
console.log(filterMovies);
