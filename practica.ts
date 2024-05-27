//Armar la lista de numeros.
//Armar la lista de numeros.

import * as rls from 'readline-sync';

// let sizeArrays: number = rls.questionInt('Ingrese la cantidad de numeros de la lista: ');
// let listaDeNumeros: number[] = new Array(sizeArrays)

// function armarLista(listaDeNumeros: number[]) {
//     for (let i = 0; i < sizeArrays; i++) {
//         listaDeNumeros[i] = rls.questionFloat(`Ingrese un numero en la posicion ${i}: `);
//     }
//     console.log('La lista es: ' + listaDeNumeros);
//     return listaDeNumeros;
// }

// let lista: number[] = armarLista(listaDeNumeros);

// let horario: number = rls.questionInt('ingrese la hora: ');
// let mediodia: number = 12
// let finTarde: number = 19

//     if(horario <= mediodia) {
//         console.log('Buen dia');
//     } else if(horario > 19) {
//         console.log('Buenas noches');
//     } else {
//         console.log('Buenas tardes');
//     }

// let puestosDeLaCarrera: string = rls.question('ingrese el puesto: ');
// let primerPuesto: string = 'primero';
// let segundoPuesto: string = 'segundo';
// let tercerPuesto: string = 'tercero';

// 	switch (puestosDeLaCarrera) {
// 		case primerPuesto:
// 		console.log("medalla de oro");
//         break;
// 		case segundoPuesto:
// 		console.log("medalla de plata");
//         break;
//         case tercerPuesto: 
// 		console.log("medalla de bronce");
//         break;
// 		default:
// 		console.log("siga participando perra");
//         break;
//     }

// let contador: number = 0;
// while (contador >= 100) {
// 	2+6;
//     contador++;
// 	}


let numeroPar: number = 0;
let numeroImpar: number = 0;

//FOR-para(inicio; condicion; cada cuanto se incrementa o decrementa);

    for(let i = 0; i < 10; i++) {
        if(i % 2 === 0) {  
            numeroPar++
        } else {
            numeroImpar++
	    }
    }

    // while (i < 10) {
    //     if(numero % 2 === 0) {  
    //         numeroPar++
    //     } else {
    //         numeroImpar++
    //     }
    //     numero++
    //     }

// console.log('hay ' + numeroPar + ' numeros pares');
// console.log(`hay ${numeroPar} numeros pares`);
// console.log('hay ' + numeroImpar + ' numeros impares');

