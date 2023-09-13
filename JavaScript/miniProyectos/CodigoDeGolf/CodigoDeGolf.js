/*
En el uego de golf cada hoyo tiene un par que
representa el numero promedio de golpes
que s espera que haga un golfista para introducir
la pelota en el hoyo

Hay un nombre diferente dependiendo de que tan 
por encima

Tu funcion tomara los argumentos par y golpes.

Retorna la cadena correcta segun esta tabala que muestra
los golpes en orden de mayor a menor.

Golpes

*/

function puntajeDeGolf(par, Golpes){
    if(Golpes == 1){
        return "Hole-in-one!";
    } else if (Golpes <= par - 2){
        return "Eagle";
    } else if (Golpes == par -1){
        return "Birdie";
    } else if (Golpes == par){
        return "Par";
    } else if (Golpes == par + 1){
        return "Bogey";
    } else if (Golpes == par + 2){
        return "Double Bogey";
    } else if (Golpes == par + 3){
        return "Go Home";
    }


}
console.log(puntajeDeGolf(4, 1));
console.log(puntajeDeGolf(4, 2));
console.log(puntajeDeGolf(4, 3));
console.log(puntajeDeGolf(4, 4));
console.log(puntajeDeGolf(4, 5));
console.log(puntajeDeGolf(4, 6));
console.log(puntajeDeGolf(4, 7));