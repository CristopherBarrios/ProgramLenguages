//Hace lo contrario a rest
const numeros = [1, 2, 3];

function sumar (x, y, z) {
    return x + y + z;
}

console.log(sumar(...numeros));//descompone el arreglo en los parametros