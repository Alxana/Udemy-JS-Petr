"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start(); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", "");
        if ( a && a.length <= 50 ) {
            const b = prompt("На сколько вы бы его оценили?", "");
            if ( b && b.length <= 50 ) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        } else {
            i--;
        }
    } 
}

//rememberMyFilms();

function detectPersonalLevel(){
    if ( personalMovieDB.count < 10 ){
        console.log("Просмотрено довольно мало фильмов");
    } else if ( personalMovieDB.count < 30 ) {
        console.log("Вы классический зритель");
    } else if ( personalMovieDB.count >= 30 ) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

//detectPersonalLevel();

function writeYourGenres(){
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}

writeYourGenres();
showMyDB(personalMovieDB.privat);

//--------------
// Место для первой задачи
function calculateVolumeAndArea(cubeEdgeLength) {
    if (Number.isInteger(cubeEdgeLength) && cubeEdgeLength > 0){
        console.log(`Объем куба: ${Math.pow(cubeEdgeLength, 3)}, площадь всей поверхности: ${Math.pow(cubeEdgeLength, 2) * 6}`);
    } else {
        console.log("При вычислении произошла ошибка");
    }
}

// Место для второй задачи
function getCoupeNumber(placeNum) {
    let coupeNum = placeNum % 4;
    if ( placeNum.isNaN || placeNum < 0 || !Number.isInteger(placeNum)){
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (placeNum == 0 || placeNum > 36){
        return "Таких мест в вагоне не существует";
    } else {
        if (placeNum % 4 > 0){
            coupeNum = placeNum % 4 + 1;
        }
        return coupeNum;
    } 
}

console.log(getCoupeNumber(1));
console.log(getCoupeNumber(4));
console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));