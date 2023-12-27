# Escribir una función que reciba una frase y devuelva un diccionario con las palabras que contiene y su longitud.


def funcion(frase):
    words = frase.split()
    lengths = map(len, words)
    return dict(zip(words, lengths))


frase_ingresada = input("Ingrese una frase: ")
print(funcion(frase_ingresada))