import fs from 'node:fs'
let contenido: string = ""; 
const nombre: string[]= ["Leche", "Galletitas", "Harina", "Queso"]
const numeros: number[]= [1, 2, 3, 4]
for (let i:number=0;i<nombre.length;i++){
    contenido += `${nombre[i]} `
}
for (let i:number=0;i<numeros.length;i++){
    contenido += `${numeros[i]} `
}

fs.writeFileSync('./test.txt', contenido);
console.log("Finalizado.")

const datos: string = fs.readFileSync('./test.txt', 'utf8');
const datos2: string = datos.trim();
const nuevoArray: string[] = datos2.split(" ");
console.log(nuevoArray)