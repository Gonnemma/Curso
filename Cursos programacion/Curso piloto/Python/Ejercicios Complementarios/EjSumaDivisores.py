numero = int(input("Introduce un numero, para acabar uno negativo: "))
while numero > 0:
    suma = 0
    for i in range (1, numero+1):
        if numero % i == 0:
            suma = suma + i
    print(f"La suma de los divisores del numero es {suma}")
    numero = int(input("Introduce un numero, para acabar uno negativo: "))