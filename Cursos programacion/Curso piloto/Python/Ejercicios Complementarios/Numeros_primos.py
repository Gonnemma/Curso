primero = 2
limite = 1000
contador = 0
for i in range(primero, limite):
    primo = True
    j=2
    while (i > j) and (primo == True):
        if i%j == 0:
            primo = False
            break
        else:
            j = j+1
    if primo == True:
        print(f"{i} es primo")
        contador = contador + 1
print(f"Entre {primero} y {limite} hay {contador} de numero primos")