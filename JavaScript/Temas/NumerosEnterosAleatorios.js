var numeroAleatorioEntre0y29 = Math.floor(Math.random() * 20);

console.log(numeroAleatorioEntre0y29)

function generarEnteroAleatorio(limiteSuperior) {
    return Math.floor(Math.random() * limiteSuperior);
}

console.log(generarEnteroAleatorio(5));
