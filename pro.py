def descuento_del_10_porciento(precio):

    descuento = 30
    cuenta = precio - ((precio * descuento) / 100)
    return cuenta

def agragrar_iva(precio):

    aumento = 21
    cuenta = precio + ((precio * aumento) / 100)
    return cuenta

ingresar_precio = float(input("ingrese el precio: "))
mensaje = "Precio con el 30% de descuento: {0}".format(descuento_del_10_porciento(ingresar_precio))
print(mensaje)
