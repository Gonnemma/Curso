import math
print("------------------------------------------")
print("               EJERCICIO 7")
print("------------------------------------------")
print("ingrese lados del triangulo")
b= float(input("lado b: "))
c= float(input("lado c: "))
print("ingrese el angulo en grados sexagesimales ")
alfa = float(input())
a = math.sqrt (b**2 + c**2 - 2*b*c * math.cos(alfa * math.pi/180))
print("El lado A es", a)
print("------------------------------------------")