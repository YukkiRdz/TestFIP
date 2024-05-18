/*Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/

import * as rls from "readline-sync";

let sizeArray: number = 6
let arrayA: number[] = new Array(sizeArray);
let arrayB: number[] = new Array(sizeArray);
let addArray: number[] = new Array(sizeArray);

for (let i = 0; i < sizeArray; i++) {
    arrayA[i] = rls.questionInt(`Ingrese el valor del arreglo A en la posicion ${i}: `);
    arrayB[i] = rls.questionInt(`Ingrese el valor del arreglo B en la posicion ${i}: `);
    addArray[i] = arrayA[i] + arrayB[i];
}

for (let i = 0; i < sizeArray; i++) {
    console.log(addArray[i]);
}