"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько вы бы его оценили?"), "",
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("На сколько вы бы его оценили?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);