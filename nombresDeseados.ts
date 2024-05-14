import * as rls from 'readline-sync';

// let dimensionArray: number = rls.questionInt("Ingrese la dimension deseada para el arreglo: ");
// let nombrePersonas: string[] = new Array (dimensionArray);
// let indice: number;

// for (indice = 0; indice < dimensionArray; indice++); {
//     nombrePersonas[indice] = rls.question(`Ingrese el nombre que quiere poner en el lugar ${indice}: `);
// }

// for (indice = 0; indice < dimensionArray; indice++); {
//    console.log(`La persona que ingreso en la posicion ${indice} es ${nombrePersonas[indice]} `);
// }

let arrayNombres: string[] = new Array (2);
let arrayNumeros: number[] = new Array (3);
let indice: number;

for (indice = 0; indice < 2; indice++) {
    arrayNombres[indice] = rls.question(`Ingrese el nombre de la posicion ${indice}: `);
}

for (indice = 0; indice < 3; indice++) {
    arrayNumeros[indice] = rls.questionInt(`Ingrese el numero de la posicion ${indice}: `);
}

for (indice = 0; indice < 2; indice++) {
    console.log(`La persona que ingreso en la posicion ${indice} es ${arrayNombres[indice]}`)
}

for (indice = 0; indice < 3; indice++) {
    console.log(`El numero que ingreso en la posicion ${indice} es ${arrayNumeros[indice]}`)
}