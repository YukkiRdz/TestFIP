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

function invertArray(userArray: number[], sizeArray: number) {
   let invert : number[] = new Array (sizeArray);
   for (index = sizeArray - 1; index >= 0; index--) {
       invert[sizeArray - index - 1] = userArray[index];
   } 
   return invert;
}

let arrayInvertida = invertArray(userArray, sizeArray)
console.log(arrayInvertida);

//let invert : string = "";
 //invert = invert + userArray[index] + " ";