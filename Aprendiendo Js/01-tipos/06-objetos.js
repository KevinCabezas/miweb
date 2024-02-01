/**
 *los objetos son  tipos de referencia no es un dato primitivo

 */

let nombre = "kevin";
let edad = 12;
let sexo = "M";

let persona = {
nombre: "kevin",// llave:valor
edad: 25,
sexo: "M",
}
console.log(persona);
console.log(persona.nombre);
console.log(persona["sexo"]);
//
//Cambiar el valor e la propiedad:

persona.edad = 45; //nuevo valor
persona["edad"] = 23; // otra forma de cambiar el valor

console.log(persona);

let nuevaSexo = "sexo";
persona[nuevaSexo] = "F"; // usar este 

console.log(persona);

// borrar propirdades del objeto

delete persona.edad;

console.log(persona);
