import fs from 'fs';
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
const precios: number[] = [525, 3500, 400, 1999];
let productosTexto: string = "";
for (let i = 0; i < productos.length; i++) {
    productosTexto += productos[i] + " ";
}
fs.writeFileSync('./productos.txt', productosTexto.trim());
let preciosTexto: string = "";
for (let i = 0; i < precios.length; i++) {
    preciosTexto += precios[i].toString() + " ";
}
fs.writeFileSync('./precios.txt', preciosTexto.trim());
const datosProd = fs.readFileSync('./productos.txt', 'utf8');
console.log("Productos: " + datosProd)
const datosPrec = fs.readFileSync('./precios.txt', 'utf8');
console.log("Precios: " + datosPrec)