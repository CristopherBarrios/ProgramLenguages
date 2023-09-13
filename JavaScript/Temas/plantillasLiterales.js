/*
Características:
- Se usa el acento invertido (backtick) ` en lugar de comillas.
- Pueden contener comillas simples y dobles.
- Las líneas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe ${variable}.
- Dentro de ${} también puedes escribir expresiones.
*/


var a = 6;
console.log(`El valor de a es ${a}`);

var nombre = "Nora";
var edad = 6;

console.log(`Mi nombre es  ${nombre} y tengo ${edad} años`);

var miArreglo = [1, 2, 3, 4];
console.log(`El arreglo es: ${JSON.stringify(miArreglo)}`);

var persona = {
    nombre: "Gino cass",
    edad: 10
};

const SALUDO = `Hola nu binbre es ${persona.nombre} y tengo  ${persona.edad} años`;

console.log(SALUDO);