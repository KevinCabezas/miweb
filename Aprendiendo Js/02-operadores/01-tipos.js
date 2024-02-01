let a = 5;
let b = 7;

// console.log(++a);
// console.log(a);


//Operador ternario

let edad = 6;
let acceso = edad > 17 ? "puede ingresar" : "menor de edad";
// console.log(acceso);

//control de flujo

// if (edad > 17){
//     console.log("Mayor");
// } else if (edad > 13){
//     console.log("Necesita acompañante");
// }else{
//     console.log("Menor");
// }

// While

// let i = -13;
// let flag = true;
// while (true) {
//     i++;
//     if (i > 100){
//         break;
//     }
//     console.log(i)
// }

// DoWhile

let i = 1;

// do {
//     if (false) {
//         i++;
//         console.log("DSFsd")
//     }

// }while (i < 13)

let animales = ["sapo", "gato", "perro", "pez"]

for (let animal of animales) {

    if (animal === "perro") {
        continue;
    }
    console.log(animal)
}