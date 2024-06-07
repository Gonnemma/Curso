/*
--------------VARIABLE Y CONSTANTE:--------------
var/let *nombre*: *tipo de dato* = ();
const *nombre*: *tipo de dato* = ();

-----------FUNCIONES:--------------
function sumar(valor1:number, valor2:number): number {
    return valor1+valor2;
}
console.log(sumar(10, 5));

---------------IF:----------------
function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}
console.log(testNum(-5));

con else if:
if (x > 50) {
    do something
} else if (x > 5) {
    do something
  } else {
    do something
  }

---------------ARREGLOS:---------------
let *nombre*: number[] = [1, 2, 3];
let *nombre*: string[] = ['1', '2', '3'];
// o bien de la siguiente manera
let *nombre*: Array<number> = [1, 2, 3];
let *nombre*: Array<string> = ['1', '2', '3'];
combinado:
let arrayMixed: any[] = [2, '5', 3];
tupla:
let *nombre*: [string, number];

--------------FOR:---------------
for(let i = 0; i < x; i++){
    console.log();
}

-------------SWITCH:-------------
switch (expresión) {
    case valor1:
        [break;]
    case valor2:
        [break;]
    default:
        [break;]
}

-------------WHILE:-------------
*se puede usar break*
let *index*:*number* = 0;
while(index < x){
    console.log();
    index++;
}




*/
var cadena = "Karen por favor aprobame";
var vocales = [0, 0, 0];
for (var contador = 0; contador < cadena.length; contador++) {
    var letras = cadena[contador];
    if (letras == "a") {
        vocales[0]++;
    }
    else if (letras == "e") {
        vocales[1]++;
    }
    else if (letras == "o") {
        vocales[2]++;
    }
}
console.log("La cantidad de letras a, e y o es: " + vocales[0] + vocales[1] + vocales[2]);
