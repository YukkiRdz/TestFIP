// Encontrar el elemento más grande del arreglo

// Dado el siguiente arreglo
// [4,7,9,3,1,45,67,23,29,78,11,16]
// - Crear un programa que encuentre cuál es el número
// más grande del arreglo e imprimirlo por consola
// - Almacenar el número más grande en una variable
// global y pasarlo a una función para determinar si el
// número es par o impar

let arrayNumbers: number[] = new Array (12);
let indice: number = 0;
arrayNumbers[0] = 4
arrayNumbers[1] = 7
arrayNumbers[2] = 9
arrayNumbers[3] = 3
arrayNumbers[4] = 1
arrayNumbers[5] = 45
arrayNumbers[6] = 67
arrayNumbers[7] = 23
arrayNumbers[8] = 29
arrayNumbers[9] = 78
arrayNumbers[10] = 11
arrayNumbers[11] = 16

function encontrarNumMax(arrayNumbers: number[]): number {
    let numMax: number = arrayNumbers[0];
    for (let i = 0; i < 11; i++) {
        if (arrayNumbers[i] > numMax) {
            numMax = arrayNumbers[i];
        }
    }
    console.log(`El numero mayor es ${numMax}`);
    return numMax;
}

let numeroMayor: number = encontrarNumMax(arrayNumbers);
paridadNumeroMayor(numeroMayor);

function paridadNumeroMayor(numeroMayor: number): number{
    let paridad: number = numeroMayor;
    if (numeroMayor % 2 == 0) {
        console.log("El numero ingresado es par.");
    } else {
            console.log("El numero ingresado es impar");
    }
    return paridad;
}

