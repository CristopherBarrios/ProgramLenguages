/*Proximo enla Fila

En informatica una cola (queue) es una estructura de datos abstracta
en la cual los elements se mantienen en orden. Los nueos elementos se pueden
añadir al final de la cola y los elementos previos se retiran del principio de la cola.

Define una funcion proximoEnLaFila que tome un arreglo y un numero
como argumentos. agrega el numero al final del arreglo y luego elimina el primer 
elemento del arreglo. la funcion proximoEnLaFila debe retornar el elemento
que fue removido.
*/

function proximoEnLaFiula(arreglo, elemento){
    arreglo.push(elemento);//agregar al final del arreglo.
    return arreglo.shift();//Remover el primer elemento.
}

var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes; " + JSON.stringify(miArreglo));//pone el arreglo mas presentable

console.log(proximoEnLaFiula(miArreglo, 6));

console.log("Despues; " + JSON.stringify(miArreglo));