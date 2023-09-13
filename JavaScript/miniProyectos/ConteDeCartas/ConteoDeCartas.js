/* Descripcion:

En el juesogo de casino blackjack el jugador puede sacarle 
ventaja a la casa llevando un registro del numero


Camio del conteo       Cartas
------------------------------------------
+1                    2, 3, 4, 5, 6
0                     7, 8, 9
-1                    10, 'J', 'Q', 'K', 'A'

*/

var conteo = 0;

function contarCartas(carta){
    var decision;
    switch (carta){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break;
    }
    if(conteo > 0){
        decision = "Apostar";
    } else {
        decision = "Esperar";
    }
    return conteo + " " + decision;
}

console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("K"));
console.log(contarCartas("A"));