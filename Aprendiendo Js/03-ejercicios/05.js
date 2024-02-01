let array = [2, 5, 7, 15, -5, -100, 55];

function geytMayorMenor(array) {
    let lista = []
    let menor = undefined;
    let mayor = undefined;
    for (let numero of array) {
        if (mayor == undefined || numero > mayor) {
            mayor = numero
        }
        
        if (menor == undefined || numero < menor) {
            menor = numero
        }
    }
    lista.push(menor)
    lista.push(mayor)
    return lista;
}

let numero = geytMayorMenor(array)

console.log(numero)