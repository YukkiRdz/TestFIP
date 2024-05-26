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

//Encuentra el promedio de una lista de números.

    // function encontrarPromedio(lista: number[]) {
    //     let suma: number = 0;
    //     let promedio: number;
    //     for (let i = 0; i < sizeArrays; i++) {
    //         suma += lista[i];
    //     }

    //     promedio = suma / sizeArrays;
    //     console.log('El promedio de la lista es: ' + promedio);
    //     return promedio;
    // }

    // encontrarPromedio(lista);

//Encuentra el número más grande en una lista.

    // function encontrarNumeroMayor(lista: number[]) {
    //     let numeroMayor: number = lista[0];
    //     for (let i = 0; i < sizeArrays; i++) {
    //         if (lista[i] > numeroMayor) {
    //             numeroMayor = lista[i];
    //         }
    //     }
    //     console.log('El numero mayor de la lista es: ' + numeroMayor);
    //     return numeroMayor;
    // }

    // encontrarNumeroMayor(lista);

//Encuentra el número más pequeño en una lista.

    // function encontrarNumeroMenor(lista: number[]) {
    //     let numeroMenor: number = lista[0];
    //     for (let i = 0; i < sizeArrays; i++) {
    //         if (lista[i] < numeroMenor) {
    //             numeroMenor = lista[i];
    //         }
    //     }
    //     console.log('El numero menor de la lista es: ' + numeroMenor);
    //     return numeroMenor;
    // }

    // encontrarNumeroMenor(lista);

//Calcula la suma de dos arreglos elemento por elemento.

    // let array2: number[] = new Array(sizeArrays);
    // let sumaDeArrays: number[] = new Array(sizeArrays);

    // function armarSegundaLista(segundoArray: number[]) {
    //     for (let i = 0; i < sizeArrays; i++) {
    //         array2[i] = rls.questionFloat(`Ingrese un numero en la posicion ${i}: `);
    //     }
    //     console.log('La segunda lista es: ' + array2);
    //     return array2;
    // }

    // let segundaLista: number[] = armarSegundaLista(array2);

    // function sumarArrays(primerArray: number[], segundoArray: number[]) {
    //     for(let i =0; i < sizeArrays; i++) {
    //         sumaDeArrays[i]= listaDeNumeros[i] + segundaLista[i];
    //     }
    //     console.log('La suma de ambas listas es: ' + sumaDeArrays);
    //     return sumaDeArrays;
    // }

    // let sumaDosArrays: number[] = sumarArrays(lista, segundaLista);

//Encuentra el número de elementos pares en una lista.

    // function encontrarCantidadDePares(lista: number[]) {
    //     let cantidadDePares: number = 0;
    //     for (let i = 0; i < sizeArrays; i++) {
    //         if (i % 2 === 0) {
    //             cantidadDePares++;
    //         }
    //     }
    //     return cantidadDePares;
    // }
    
    // let cantidadDeNumerosPar: number = encontrarCantidadDePares(lista);
    // console.log('La cantidad de numeros pares dentro de la lista es: ' + cantidadDeNumerosPar);

//Encuentra el número de veces que aparece un elemento en una lista.
    
    // function encontrarCantidadDeRepeticion(array: number[]) {
    //     let cantidadRepetidos: number = 0;
    //     for (let i = 0; i < sizeArrays; i++) {
    //         for(let j = 0; j < i; j++) {
    //             if (array[i] === array [j]) {
    //                 cantidadRepetidos++
    //             }
    //         }
    //     }
    //     return cantidadRepetidos;
    // }
    
    // let vecesRepetidas: number = encontrarCantidadDeRepeticion(lista);
    // console.log(`El elemento se repite: ${vecesRepetidas} veces`);

//Calcula el producto de todos los elementos en una lista.

//  function encontrarProducto(lista: number[]) {
//         let producto: number = 1;
//         for (let i = 0; i < sizeArrays; i++) {
//                 producto = producto * lista[i];
//             }
    
//         console.log('El producto de la lista es: ' + producto);
//         return producto;
//     }

//     encontrarProducto(lista);

//Encuentra el número más grande entre dos números.

    // let primerNumero: number = rls.questionInt('Ingrese el primer numero que desea comparar: ');
    // let segundoNumero: number = rls.questionInt('Ingrese el segundo numero que desea comparar: ');

    // function numeroMasGrande( numeroUno: number, numeroDos: number) {
    //     if (primerNumero > segundoNumero) {
    //         console.log('El numero mas grande es: ' + primerNumero);
    //     } else {
    //         console.log('El numero mas grande es: ' + segundoNumero);
    //     }
    // }

    // numeroMasGrande(primerNumero, segundoNumero);

//Ordena una lista de números de forma ascendente.

    

//Lista a modo de ejemplo: [1,5,4,6,8,7,6] - [9,5,8,6,11,2,1]