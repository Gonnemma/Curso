#indent rainbow

def obtener_nombre_mes (numero_mes):
    meses={
        1:"Enero",
        2:"Febrero",
        3:"Marzo",
        4:"Abril",
        5:"Mayo",
        6:"Junio",
        7:"Julio",
        8:"Agosto",
        9:"Septiembre",
        10:"Octubre",
        11:"Noviembre",
        12:"Diciembre"
    }
    return meses.get(numero_mes, "Mes no valido")

def main():
    #try:
        print("--------------------------")
        numero_mes= int(input("Ingrese el numero del mes (1-12): "))
        if numero_mes < 13:
            nombre_mes = obtener_nombre_mes(numero_mes)
            print("--------------------------")
            print(f"El numero {numero_mes} corresponde al mes de {nombre_mes}")
            print("--------------------------")
    #except ValueError:
        else:
            print("--------------------------")
            print("Error: por favor, ingrese un numero valido")
            print("--------------------------")
if __name__ == "__main__":
    main()