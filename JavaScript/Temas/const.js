// const miConstante = 35;

// console.log(miConstante);

// miConstante = 30;

function calcularAreaCirculo(radio) {
    const PI = 3.14;

    if (radio < 0) {
        return undefined;
    }
    return PI * (radio ** 2);
}