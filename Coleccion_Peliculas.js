const Pelicula = require('./Pelicula');

class Coleccion_Peliculas {
    constructor() {
        this.Collection = [];
    }

    Post_Pelicula(pelicula) {
        this.Collection.push(pelicula);
    }

    Get_Collection_peli() {
        this.Collection.forEach(pelicula => {
            console.log(pelicula.Info_Pelicula());
        });
    }
}

module.exports = Coleccion_Peliculas;