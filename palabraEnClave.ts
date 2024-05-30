// Convertir una palabra ingresada por el usuario en clave, según las reglas siguientes:

// ● si el carácter es una vocal reemplazar aeiou por . , ; : ! respectivamente.
// ● si el carácter es un número o un operador matemático (+ - * / ) queda igual.
// ● si el carácter es una consonante minúscula pasar a mayúscula y viceversa.

import * as rls from 'readline-sync';

let palabraIngresada: string = rls.question('Ingrese la palabra que quiere codificar: ');

function codificarPalabra(palabra: string): string {
    let vocales: string = 'aeiou';
    let numeroUOperadorMatematico: string = '0123456789+-*/';
    let signos: string = '.,;:!';
    let palabraCodificada: string = '';
    for (let i = 0; i < palabra.length; i++) {
        if (numeroUOperadorMatematico.indexOf(palabra[i]) >= 0) {
                palabraCodificada += palabra[i];
        }   else if(vocales.indexOf(palabra[i]) >= 0) {
                palabraCodificada += signos[vocales.indexOf(palabra[i])];
        }   else if(palabra[i] == palabra[i].toUpperCase()) {
                palabraCodificada += palabra[i].toLowerCase();
        }   else {
                palabraCodificada += palabra[i].toUpperCase();
        }
    }
    return palabraCodificada;
}

console.log(`La palabra ingresada: ${palabraIngresada} se convierte en ${codificarPalabra(palabraIngresada)}`);