let array = [2, 5, 7, 15, -5, -100, 55];
function cuantosPositivos(array) {
    let contador = 0;
    for (numero of array) {
        if (numero > 0) {
            contador++;
        }
    }
    return contador;
}

let result = cuantosPositivos(array);
console.log(result)
