function metodoBurbuja(array: number[]): number[] {
    const longitud = array.length;
    for (let i = 0; i < longitud - 1; i++) {
        for (let j = 0; j < longitud - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                let datos = array[j];
                array[j] = array[j + 1];
                array[j + 1] = datos;
            }
        }
    }
    return array;
}
const array = [1, 2, 3, 4, 10, 20, 8, 27, 157];
const arrayDescendente = metodoBurbuja(array);
console.log("Arreglo descendente: " + arrayDescendente);