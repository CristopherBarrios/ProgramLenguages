function retornarMinimo (x,y){
    return x < y ? x : y;// si es verdadero lo primero muestra x y si es falso muestra y
}

console.log(retornarMinimo(4,7));
console.log(retornarMinimo(8,2));


var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3);