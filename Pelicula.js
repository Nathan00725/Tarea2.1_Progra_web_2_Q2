class Pelicula {
    constructor(titulo, trama, director, año) {
        this.titulo = titulo;
        this.trama = trama;
        this.director = director;
        this.año = año;
    }

    Info_Pelicula() {
        return `${this.titulo} su trama es de: ${this.trama}, dirigida por ${this.director}, estrenada en ${this.año}`;
    }
}

module.exports = Pelicula;