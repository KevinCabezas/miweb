function precioConIva(precio, iva) {
    let total = ((precio * (iva * 100)) / 100) + precio;

    return total
}

let resultado = precioConIva(19.90, 0.15) 
// let resultado = precioConIva(90, 15) 

console.log(resultado)