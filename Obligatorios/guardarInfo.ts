//Guarda infomacion de los arrays en un archivo 'precios.txt' y 'productos.txt' respectivamente
//Luego recupera la info en forma de array y muestrala por consola

import fs from 'node:fs';

const precios: number[] =[525, 3500, 400, 1999];
const productos: string[] = ['Leche', 'Galletitas', 'Harina', 'Queso'];
let precioString: string = '';
let productoString: string = '';

//Convertir los Arrays en string
for (let i: number = 0; i < precios.length; i++) {
    precioString += `${precios[i]} `;
}

for (let i: number = 0; i < productos.length; i++) {
    productoString += `${productos[i]} `;
}

//Guardar informacion en txt
fs.writeFileSync('./precios.txt', precioString);
fs.writeFileSync('./productos.txt', productoString);

//Leer precios.txt
const preciosTXT: string = fs.readFileSync('./precios.txt', 'utf-8');
const preciosSinEspacios: string = preciosTXT.trim(); //Saca los espacios de adelante y atras del string
const arrayPrecios: string[] = preciosSinEspacios.split(' '); //Sepera los elementos del array cada vez que hay un espacio
console.log(arrayPrecios);

//Leer productos.txt
const productosTXT: string = fs.readFileSync('./productos.txt', 'utf-8');
const productosSinEspacios: string = productosTXT.trim(); //Saca los espacios de adelante y atras del string
const arrayProductos: string[] = productosSinEspacios.split(' '); //Sepera los elementos del array cada vez que hay un espacio
console.log(arrayProductos);