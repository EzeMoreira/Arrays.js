                            // Ejemplos de Arrays con su respectiva documentación


        // Array simple de ejemplo

let frutas = ["Ezequiel", "Pedro", "Jose", "Manzana", "Casa", "Auto"];
document.write(frutas)


document.write("<br><br>"); // Salto de linea para separar las secciones/ejemplos.


// Operadores en Javascript, con ellos podemos acceder a un elemento en particular del array respetando su posición.

let Operadores = [1,2,3,4]
document.write("El tercer elemento del array es " + Operadores[2]);


document.write("<br><br>");


        // Acceso a elementos del Array

// Para conocer el número de elementos que tiene un array utilizamos la propiedad " .length " que nos
// devuelve el número de elementos existentes en un array.

const autos = ["Audi", "BMW", "Mercedes Benz", "Fiat", "Renault", "KIA"];
const marcaAutos = autos.length
document.write("La cantidad de marcas de autos son ", marcaAutos);


document.write("<br><br>");


        // Metodos para utilizar en los Arrays

// Añadir o eliminar 
// .unshift() y .shift() son métodos que actúan al inicio del array.

const elements = ["a", "b", "c", "d", "e"]
elements.unshift("XYZ"); //Agrega uno o mas elementos y devuelve una nueva longitud del array
document.write(elements)

document.write("<br><br>");

const elementos = ["Jorge", "Matias", "Lucas"]
elementos.shift(); //elimina el primer elemento de un array y devuelve una nueva longitud del array
document.write(elementos)