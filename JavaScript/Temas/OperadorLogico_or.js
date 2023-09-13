/*Tabla de verdad del operador AND
para: x || y
| X | Y | X || Y |
--------------------
| T | T |    T   |
| T | F |    T   |
| F | T |    T   |
| F | F |    F   |

La expresion es verdadera si alguno de los dos oprandos o ambos son verdaderos
*/

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


var a = 2;

//             true || false = true
console.log((a < 5) || (a > 15));