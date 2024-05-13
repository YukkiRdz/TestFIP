import * as rls from 'readline-sync';

let arrayMeses: string[] = new Array (12);

let numeroMes: number = rls.questionInt("Ingrese el numero del mes: ");

arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let indice: number = numeroMes - 1;
console.log("El mes es", arrayMeses[indice]);
