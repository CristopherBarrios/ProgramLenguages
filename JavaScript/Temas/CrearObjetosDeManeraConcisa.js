// const crearPersona = (nombre, edad, idioma) => {
//     return {
//         nombre: nombre,
//         edad: edad,
//         idioma: idioma
//     };
// };

// console.log(crearPersona("Gino Smith", 28, "Español"));

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("Gino Smith", 28, "Español"));