// Convertir una palabra ingresada por el usuario en clave, según las reglas siguientes:

// ● si el carácter es una vocal reemplazar aeiou por . , ; : ! respectivamente.
// ● si el carácter es un número o un operador matemático (+ - * / ) queda igual.
// ● si el carácter es una consonante minúscula pasar a mayúscula y viceversa.

import * as rls from 'readline-sync';

//le pido al usuario que ingrese una palabra
let palabraIngresada: string = rls.question('Ingrese la palabra que quiere codificar: ');

//funcion donde se codifica la palabra ingresada por el usuario
function codificarPalabra(palabra: string): string {
    //los string funcionan como arrays
    let vocales: string = 'aeiou';
    let numeroUOperadorMatematico: string = '0123456789+-*/';
    let signos: string = '.,;:!';
    //string vacio para ir cargando la palabra codificada paso por paso
    let palabraCodificada: string = '';
    //el for recorre toda la palabra, letra por letra
    for (let i = 0; i < palabra.length; i++) {
        //si dentro de '0123456789+-*/' hay un elemento de la palabra ingresada ese mismo elemento se carga en la palabra codificada
        if (numeroUOperadorMatematico.indexOf(palabra[i]) >= 0) {
                palabraCodificada += palabra[i];
            //si dentro de 'aeiou' hay un elemento de la palabra ingresada los cambia por signos
        }   else if(vocales.indexOf(palabra[i]) >= 0) {
                palabraCodificada += signos[vocales.indexOf(palabra[i])];
                //Si dentro de la palabra ingresada se encuentra una mayuscula la vuelve minuscula
            }   else if(palabra[i] == palabra[i].toUpperCase()) {
                    palabraCodificada += palabra[i].toLowerCase();
                    ////Si encuentra una minuscula la vuelve mayuscula
                }   else {
                        palabraCodificada += palabra[i].toUpperCase();
                }
            // devuelvo la palabra codificada
            } return palabraCodificada;
}

//ACLARACION dentro del if es >= 0 porque .indexOf si no encuentra nada da -1
console.log(`La palabra ingresada: ${palabraIngresada} se convierte en ${codificarPalabra(palabraIngresada)}`);