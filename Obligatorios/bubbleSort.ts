// Implemente un algoritmo de ordenamiento con el método Bubble Sort, para que ordene un arreglo de longitud N en orden descendente.

import * as rls from 'readline-sync';

let longitud: number = rls.questionInt('Ingrese la longitud del arreglo: ');
let arraySinOrdenar: number[] = new Array(longitud);

cargarArreglo(arraySinOrdenar, 100);
console.log(`El arreglo sin ordenar es: ${escribirEnUnaLinea(arraySinOrdenar)}`)
burbuja(arraySinOrdenar);
console.log(`El arreglo ordenado de manera descendente es: ${escribirEnUnaLinea(arraySinOrdenar)}`)

//crear un numero random entre 0 y numAzar
function azar(numAzar: number): number {
    return Math.floor(Math.random() * numAzar);
}

//carga el arreglo con numeros al azar
function cargarArreglo(arreglo: number[], numAzar: number) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = azar(numAzar)
    }
}

//mostramos los valores del arreglo
function escribirEnUnaLinea(arreglo: number[]): string {
    let i: number, arregloLineal: string = ' ';
    for (i = 0; i < arreglo.length; i++) {
        arregloLineal += `${arreglo[i]} `;
    }
    return arregloLineal;
}

//guarda un elemento en la var auxiliar temporalmente para reordenar las posiciones
function intercambiar(arreglo: number[], i: number, j: number) {
    let auxiliar: number;
    auxiliar = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = auxiliar;
}

//compara los valores en las posiciones i y j del arreglo
function comparar(arreglo: number[], i: number, j: number): number{
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}

//funcion donde se ordena el arreglo de manera descendente
function burbuja(arreglo: number[]) {
    let i: number, j: number;
    for (i = 2; i < arreglo.length; i++) {
        for (j = 0; j < arreglo.length - 1; j++) {
            if (comparar(arreglo, j, j + 1) == -1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}