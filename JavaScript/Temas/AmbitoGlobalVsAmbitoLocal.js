var miNombre = "Nora";

function mostrarMiNombre(){
    var miNombre = "Gino";
    console.log(miNombre);//La local tiene prieridad
}

mostrarMiNombre();

console.log(miNombre);