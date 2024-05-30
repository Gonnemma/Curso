def calcular_probabilidad(dados):
    probabilidad = (6 ** dados)
    #probabilidad = (1/6 ** dados)
    return probabilidad
dados = int(input("Ingrese la cantidad de dados: "))
#probabilidad_6= round(calcular_probabilidad(dados), 2)        #cambia el valor en la memoria
probabilidad_6= calcular_probabilidad(dados)
#print(f"la probabilidad de salir el numero 6 en {dados} dados es de: {probabilidad_6: .10f}")          #cambia el valor momentaneamente
print(f"la probabilidad de salir el numero 6 en {dados} dados es de: 1 entre {probabilidad_6}")