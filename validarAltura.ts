/**Desarrolle un algoritmo que, de acuerdo a la 
altura de una persona, decida si puede entrar a 
un juego en un parque de diversiones
•Para poder subirse a la montaña rusa la 
persona debe medir 1.30 mts. o más*/

/**alturaPersona----> variable;
 * alturaApta----> 1.30 mts;
 * 
 * le pido a la persona que ingrese su altura;
 * si alturaPersona es mayor o igual a 1.30 mts {
 * devuelvo que puede subirse a la montaña rusa;
 * } sino {
 * devuelvo que no puede subirse;
 * }
 */

import * as rls from "readline-sync";

let alturaApta : number = 1.30
let alturaPersona : number;

alturaPersona = rls.questionFloat("Ingrese su altura en metros: ");

if (alturaPersona < alturaApta) {
    console.log("No podes subir a la montaña rusa");
} else {
    console.log("Podes subir a la montaña rusa");
}
