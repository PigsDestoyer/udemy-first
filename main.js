"use strict"

const NumberOfFilms = prompt("Скільки фільмів ви вже переглянули?", "");

let PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



const LastFilmName1 = prompt("Який ваш останній проглянутий фільм?" , "");
const LastFilmMark1 = prompt("На скільки ви його оцінюєте?", "");
const LastFilmName2 = prompt("Який ваш останній проглянутий фільм?" , "");
const LastFilmMark2 = prompt("На скільки ви його оцінюєте?", "");


PersonalMovieDB.movies[LastFilmName1] = LastFilmMark1;
PersonalMovieDB.movies[LastFilmName2] = LastFilmMark2;

console.log (PersonalMovieDB);

