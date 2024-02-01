function getbyIdx(array, indice) {
    for (let i in array) {
        if (array[i] === indice) {
            console.log(array[i])
            return array[i];
        }else {
            return "el elemento no exixte";
        }
        
    }

}

let resultado = getbyIdx([1, 2], 2);
console.log(resultado)