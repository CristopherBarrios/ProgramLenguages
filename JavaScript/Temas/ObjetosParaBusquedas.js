function buscarElementoQuimico(simbolo){
    var elementoQuimico = "";

    switch (simbolo) {
        case "Al":
            elementoQuimico = "Aluminio";
    }
}
function buscarElementoQuimicoNuevo(simbolo){
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
    };
    return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimicoNuevo("Al"));