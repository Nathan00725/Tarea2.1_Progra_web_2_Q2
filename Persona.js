class Persona {
    constructor(nombre, apellido, edad, profesion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.profesion = profesion;
    }

    Info_Persona() {
        return `${this.nombre} ${this.apellido}, ${this.edad} años, con la profeccion de: ${this.profesion}`;
    }
}

module.exports = Persona;