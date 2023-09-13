// function miFuncion(...args) {
//     console.log(args);
// }

// miFuncion(1);
// miFuncion(1, 2, 3, 4, 5);

const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};