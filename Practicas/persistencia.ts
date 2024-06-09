import fs from 'node:fs';
// import * as fs from 'node:fs';
// let fs = requier('node:fs'); VIEJO

// let contenido: number = 9
// let contenidostring: string = contenido.toString();

const nombres: string[] = ['Juan', 'Amalia', 'Nicolas', 'Carla'];
let contenido: string = '';

for (let i = 0; i < nombres.length; i++) {
    contenido += `${nombres[i]} `; // template string ----> nombres[i] + ' '
}

//Guardar informacion en txt
fs.writeFileSync('./test.txt', contenido );
console.log('finalizado');

//Leer informacion txt
const datos: string = fs.readFileSync('./test.txt', 'utf-8');
const datos2: string = datos.trim(); //Saca los espacios de adelante y atras del string
const array: string[] = datos2.split(' '); //Sepera los elementos del array cada vez que hay un espacio
console.log(array);