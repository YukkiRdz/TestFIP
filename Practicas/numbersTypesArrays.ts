/*Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay*/

import * as rls from "readline-sync";

let sizeArray: number = rls.questionInt("Ingrese la longitud del arreglo que desee: ");
let userArray: number[] = new Array(sizeArray);
let index: number = 0

for (index = 0; index < sizeArray; index++) {
    userArray[index] = rls.questionInt(`Ingrese el numero ${index}: `);
}

let zero: number = 0;
let positive: number = 0;
let negative: number = 0;


function numbersTypes(){
    for (index = 0; index < sizeArray; index++) {
        if (userArray[index] < 0) {
            negative++  
        } else if (userArray[index] > 0) {
        positive++
        } else {
        zero++
        }
    }
console.log(`hay ${negative} numeros negativos`);
console.log(`hay ${zero} ceros`);
console.log(`hay ${positive} numeros positivos`);
}

numbersTypes();



