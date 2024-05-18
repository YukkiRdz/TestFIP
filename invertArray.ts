/*Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del ultimo al primero*/

import * as rls from "readline-sync";

let sizeArray: number = rls.questionInt("Ingrese la longitud del arreglo que desee: ");
let userArray: number[] = new Array(sizeArray);
let index: number = 0

for (index = 0; index < sizeArray; index++) {
    userArray[index] = rls.questionInt(`Ingrese el numero ${index}: `);
}

let invert : string = "";

for (index = sizeArray - 1; index >= 0; index--) {
invert = invert + userArray[index] + " ";
}

console.log(invert);