// Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres.
// • Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario).
// • Luego de resolverlo, pensar en aprovechar métodos y discutir cómo representar la información.

import * as rls from 'readline-sync';

let cantidadDeAlumnos: number = rls.questionInt('Ingrese la cantidad de alumnos: ');
let nombresDeAlumnos: string[] = new Array(cantidadDeAlumnos);
let notas1: number[] = new Array(cantidadDeAlumnos);
let notas2: number[] = new Array(cantidadDeAlumnos);
let notas3: number[] = new Array(cantidadDeAlumnos);

function cargarAlumnos(nombres: string[]): string[] {
    for (let i = 0; i < nombres.length; i++) {
        nombres[i] = rls.question(`Ingrese el nombre del alumno ${i}: `);
    }
    return nombres;
}

function cargarNotas(nombres: string[], notas: number[]): number {
    let todasLasNotas: number = 0
    for (let i = 0; i < nombres.length; i++) {
        notas1[i] = rls.questionInt(`Ingrese la nota ${i+1} de ${nombres[i]}: `);
        notas2[i] = rls.questionInt(`Ingrese la nota ${i+1} de ${nombres[i]}: `);
        notas3[i] = rls.questionInt(`Ingrese la nota ${i+1} de ${nombres[i]}: `);
        todasLasNotas++
        }
    return todasLasNotas;
}

function promedioAnual(notas: number[], nombres: string[]): number {
    let suma: number = 0;
    let promedio: number = 0;
    for (let i = 0; i < nombres.length; i++) {
        suma += notas[i];
    }
    promedio = suma / 3;
    return promedio;
}