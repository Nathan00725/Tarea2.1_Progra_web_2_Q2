
class Libro {
    constructor(titulo, autor, editorial, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.año = año;
    }

    Info_Libro() {
        return `${this.titulo} de ${this.autor}, de la editorial: ${this.editorial}, publicado en ${this.año}`;
    }
}

module.exports = Libro;