var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(miCuaderno.hasOwnProperty("color"));//treu

console.log(miCuaderno.hasOwnProperty("a ve pues"));//fasle

function verificarPropiedad(obj, propiedad){
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene la propiedad"
    }
}

console.log(verificarPropiedad(miCuaderno,"categoria"));