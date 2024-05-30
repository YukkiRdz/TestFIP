import * as rls from 'readline-sync';

let sizeArray: number = rls.questionInt('Ingrese cantidad de jugadores: ');
let edadesJugadores: number[] = new Array(sizeArray);

function cargarJugadores(edadesJugadores: number[], sizeArray: number){
    for(let i = 0; i < sizeArray; i++) {
        edadesJugadores[i] = Aleatorio(3,7);
    }
}

function Aleatorio(menorValor: number, mayorValor: number): number {
    let numeroADevolver: number = 0;
    numeroADevolver = Math.floor(Math.random()*(mayorValor-menorValor+1) + menorValor);
    return numeroADevolver
}

function mostrarJugadores(edadesJugadores: number[], sizeArray: number){
    let jugadores: string = '';
    for(let i = 0; i < sizeArray; i++) {
        jugadores += edadesJugadores[i] + " ";
        console.log(`la edad del jugador ${i} es ${edadesJugadores}`)
    }
}

function promedioEdadesJugadores(edadesJugadores: number[], sizeArray: number): number {
    let suma: number = 0;
    let i: number = 0;
    let promedio: number = 0;
    for (i; i < sizeArray; i++) {
        suma += edadesJugadores[i];
    }
    promedio = suma / sizeArray;
    return promedio;
}
cargarJugadores(edadesJugadores, sizeArray);
mostrarJugadores(edadesJugadores, sizeArray);
console.log(`El promedio de edades es ${promedioEdadesJugadores}`);