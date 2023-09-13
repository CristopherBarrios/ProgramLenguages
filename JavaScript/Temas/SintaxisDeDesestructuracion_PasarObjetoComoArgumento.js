var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Española",
    ubicacion: "España"
};

// const actualizarPerfil = (ingormacionDePerfil) => {
//     const {nombre, edad, nacionalidad, ubicacion} = ingormacionDePerfil;
//     console.log(nombre);
//     console.log(edad);
//     console.log(nacionalidad);
//     console.log(ubicacion);

// };
const actualizarPerfil = ({nombre, edad, nacionalidad, ubicacion}) => {
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);

};

actualizarPerfil(nuevoPerfilCliente)


const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};

const puntoMedio = ({max, min}) => (max + min)/2

console.log(puntoMedio(estadisticas));