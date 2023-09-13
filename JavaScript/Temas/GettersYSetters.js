class Libro {
    constructor(autor) {
        this._autor = autor;//el guion bajo dice que otros usuarios vean que eso es privado
    }

    get autor(){
        return this._autor;
    }

    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    }
}

const libro = new Libro("anonimo");
console.log(libro.autor);

libro.autor = "Gino Smith";
console.log(libro.autor);