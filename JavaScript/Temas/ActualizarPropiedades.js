var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color);//azul

mochila.color = "verde";
console.log(mochila.color);

mochila.contenido.push("lapiz");

console.log(mochila.contenido);