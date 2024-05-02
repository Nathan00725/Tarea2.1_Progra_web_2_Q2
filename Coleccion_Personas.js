const Persona = require('./Persona');

class Coleccion_Personas {
    constructor() {
        this.Collection = [];
    }

    Post_Persona(persona) {
        this.Collection.push(persona);
    }

    Get_Coleccion_Personas() {
        this.Collection.forEach(persona => {
            console.log(persona.Info_Persona());
        });
    }
}

module.exports = Coleccion_Personas;