mensaje = "hola mundo"
# print(mensaje)
contador = 0

for letra in mensaje:
    if (letra == " "):
        contador -= 1
    contador +=1

print(contador)


