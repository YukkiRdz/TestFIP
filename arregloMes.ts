import * as rls from 'readline-sync';

let numeroMes: number = rls.questionInt("Ingrese el numero del mes: ");
let arrayMeses: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let indice: number = numeroMes - 1;

    if (indice < 12) {
        console.log("El mes es: ", arrayMeses[indice]);
    } else {
        console.log ("Debe ingresar un mes valido");
        numeroMes = rls.questionInt("Ingrese el numero del mes: ");
    }

// let arrayNumeroDeseado: number[] = new Array (5);
// let numero: number;
// let indice: number;

// for (indice = 0; indice < 5; indice++) {
// numero = rls.questionInt(`Indique el numero que desea incorporar en la posicion ${indice}`);
//     arrayNumeroDeseado[indice] = numero;
//     //arrayNumeroDeseado[indice] = rls.questionInt("Indique el numero que desea incorporar en la posicion ${indice}: ");
// }
// for (indice = 0; indice < 5; indice++) {
//     console.log(`El numero en la posicion ${indice} es ${arrayNumeroDeseado[indice]}`);
// }