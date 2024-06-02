//Convertir un texto a un nombre de variable en camelCase
import * as rls from 'readline-sync';

let textoIngresado: string = rls.question('Ingrese un texto: ');

function convertirACamelCase(texto: string): string {
    let aMayusc: boolean = false;
    let camelCase: string = '';
    for (let i = 0; i < texto.trim().length; i++) {
        if (texto[i] == ' ') {
            aMayusc = true;
        } else if (aMayusc) {
            camelCase += texto[i].toUpperCase();
            aMayusc = false;
        }   else {
            camelCase += texto[i].toLowerCase();
        }
    } 
    return camelCase;
}

console.log(`El texto ${textoIngresado} convertido a camelCase queda: ${convertirACamelCase(textoIngresado)}`);