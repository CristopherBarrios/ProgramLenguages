const persona = {
    nombre: "Isabel",
    presentarse: function() {
        return `hola mi nombre es ${this.nombre}`;//this se regiere al objeto que estamos llamando
    }
};

console.log(persona.presentarse());