// Cargue dos arreglos de dimensión N números (la cantidad es ingresada por el usuario)
// • Calcule el producto escalar entre los dos arreglos

import * as rls from 'readline-sync';

let sizeArray: number = rls.questionInt('Ingrese la dimension del arreglo: ');
let primerArray: number[] = new Array (sizeArray);
let segundoArray: number[] = new Array (sizeArray);

cargarPrimerArreglo(primerArray);
cargarSegundoArreglo(segundoArray);
console.log(`El producto de ambos arreglos es de ${escalarAmbosArreglos(primerArray, segundoArray)}`);

function cargarPrimerArreglo(primero: number[]): number[] {
    for (let i = 0; i < primero.length; i++) {
        primero[i] = rls.questionInt(`Ingrese un numero en la posicion ${i} del primer array: `);
    }
    return primero;
 }

function cargarSegundoArreglo(segundo: number[]): number[] {
    for (let i = 0; i < segundo.length; i++) {
        segundo[i] = rls.questionInt(`Ingrese un numero en la posicion ${i} del segundo array: `);
    }
    return segundo;
}

function escalarAmbosArreglos(primero: number[], segundo: number[]): number {
    let producto: number = 0;
    for (let i = 0; i < sizeArray; i++) {
        producto += primero[i] * segundo[i];

    }
    return producto;
}