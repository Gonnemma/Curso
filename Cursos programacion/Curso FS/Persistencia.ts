/*
import fs from "node:fs"

fs.writeFileSync('ruta del archivo, si no existe lo crea, se escribe: ("./test.txt")', 'texto');

*/

import fs from 'node:fs'
//let fs =require('node:fs')
let contenido: string = ""; 
const nombre: string[]= ["Juan", "Amelia", "Pedro"]
for (let i:number=0;i<nombre.length;i++){
    contenido += `${nombre[i]} `
}

fs.writeFileSync('./test.txt', contenido);
console.log("Finalizado.")

const datos: string = fs.readFileSync('./test.txt', 'utf8');
const datos2: string = datos.trim();
const nuevoArray: string[] = datos2.split(" ");
console.log(nuevoArray)