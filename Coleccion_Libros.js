const Libro = require('./Libro');


class Coleccion_Libros {
    constructor() {
        this.Collection = [];
    }

    
    Post_Libro(libro) {
        this.Collection.push(libro);
    }

    Get_Collection() {
        this.Collection.forEach(libro => {
            console.log(libro.Info_Libro());
        });
    }
}



module.exports = Coleccion_Libros;