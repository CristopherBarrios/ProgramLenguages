// const usuario = {
//     johnDoe: {
//         edad: 27,
//         correo:"cristo.coco"
//     }
// };

// const {johnDoe:{edad:edadDelUsuario, correo}} = usuario;

// console.log(edadDelUsuario);
// console.log(correo);

//--------------------------------------

const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima: 75
    },
    "hoy": {
        minima:64,
        maxima: 77
    },
    "mañana": {
        minima: 68,
        maxima: 88
    }
};

const minimoHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

console.log(maximaHoy);
console.log(minimoHoy);

