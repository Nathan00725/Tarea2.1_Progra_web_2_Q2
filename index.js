const libro = require('./Libro');
const Pelicula = require('./Pelicula');
const Persona = require('./Persona');
const Coleccion_Libros = require('./Coleccion_Libros');
const Coleccion_Peliculas = require('./Coleccion_Peliculas');
const Coleccion_Personas = require('./Coleccion_Personas');

const collection_Libro = new Coleccion_Libros();
const collection_Pelicula = new Coleccion_Peliculas();
const collection_Personas = new Coleccion_Personas();


collection_Libro.Post_Libro(new libro("The Legend of Zelda: Ocarina of Time", "Miya Moto", "Nintendo",1992));
collection_Libro.Post_Libro(new libro("Guia de Super Mario", "Miya Moto", "Nintendo", 1984));

collection_Pelicula.Post_Pelicula(new Pelicula("Titanes del pacifico", "Acción","Guillermo del Toro", 2012));
collection_Pelicula.Post_Pelicula(new Pelicula("Pinocho", "Fantasia", "Guillermo del Toro", 2022));

collection_Personas.Post_Persona(new Persona("Erick David", "Hernandez", 19, "Ingeniero"));
collection_Personas.Post_Persona(new Persona("Josep Uziel", "Salinas", 18, "Bioquimico Termo Nuclear"));



/*
Con ese Let y numero esta para que elija y pueda saber que tomara podra ver su funcionalidad dependiendo el numero que elija
ya que aun no habilito que el usuario ingrese para que funcione del todo el Switch.
*/ 


let eleccion = 3

switch(eleccion) {
    case 1:
        console.log("Mostrando colección de libros:");
        collection_Libro.Get_Collection();
        break;
    case 2:
        console.log("Mostrando colección de películas:");
        collection_Pelicula.Get_Collection_peli();
        break;
    case 3:
        console.log("Mostrando colección de personas:");
        collection_Personas.Get_Coleccion_Personas();
        break;
    default:
        console.log("Opción no válida");
}
