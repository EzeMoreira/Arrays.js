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

document.write("<br><br>");

const elements2 = ["a", "b", "c", "d", "e"]
elements2.push("XYZ"); //agrega un elemento al array al final de la lista 
document.write(elements2)

document.write("<br><br>");

const elements3 = ["Lucas", "Matias", "Jorge"]
elements3.pop(); //elimina el ultimo elemento de un array y lo devuelve 
document.write(elements3)


document.write("<br><br>");


            // Metodo de Reversa

const reversa = [1, 2, 3, 4, 5]
reversa.reverse() // invierte el orden de los elementos de un array
document.write(reversa)

document.write("<br><br>");


            // Metodo sort 

const ordenar = [2, 5, 7, 0, 3, 9]
ordenar.sort() //ordena los elementos de un arreglo y devuelve el arreglo ordenado
document.write(ordenar)

document.write("<br><br>");


            // Metodo splice

let texto = ["abecedario", "manzana", "zoologico", "bebes", "tropical"];
document.write(texto + "<br>"); 
texto.splice(1,3,"Roberto", "Gustavo", "Maximo")    
document.write(texto)
//El primer parametro es el start es decir donde arrancamos (la posicion)  
//el 2° parametro es la cantidad de elementos que eliminamos
//Y como 3° parametro agregamos lo que queremos sumar o reemplazar en caso de que algo se encuentre ahi


document.write("<br><br>");



            // Arrays asociativos 

// Tambien son arrays que tiene elementos asociados, es decir mas de una caracteristica que lo describe 
// de la cual podemos llamarla sin necesidad de involucrar las otras caracteristicas que ya posee, ej:

// 1° Primero colocamos nombre a la variable, y luego el valor de todos los elementos que puede tener, en este caso 
// los componentes de una pc.

let computadora = {
        nombre: "ezequiel",
        procesador: "Intel Core I7",
        ram: "8Gb",
        memoria: "1TB"
};

let nombre = computadora["nombre"];
let procesador = computadora["Intel Core I7"];
let ram = computadora["8Gb"];
let memoria = computadora["1TB"];

laFraseEs = `el nombre de la computadora es: ${nombre}<br>
                y su procesador es: ${procesador} <br>
                y su memorira ram es: ${ram} <br>
                la memora que tiene es de ${memoria} <br>`;

document.write(laFraseEs);