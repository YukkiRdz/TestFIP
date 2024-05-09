"use strict";
/**Desarrollar un algoritmo que dado un numero, ingresado por el usuario determine si el numero es par o impar y le informe al usuario
En el caso de ser 0 el algoritmo debera informarlo
plantear pseudocodigo y pruebas de escritorio */
Object.defineProperty(exports, "__esModule", { value: true });
/**Pseudocodigo
 * Leer numeroIngresado que el usuario ingresa
 * si numeroIngresado es igual a 0
 *  mostrar "El numero ingresado es 0."
 * sino si el resto de numeroIngresado dividido entre 2 es 0
 *  mostrar "El numero ingresado es par."
 * sino
 *  mostrar "El numero ingresado es impar"
 */
var readlineSync = require("readline-sync");
var numeroIngresado = readlineSync.questionInt("Ingrese un numero:");
if (numeroIngresado == 0) {
    console.log("El numero ingresado es 0.");
}
else if (numeroIngresado % 2 == 0) {
    console.log("El numero ingresado es par.");
}
else {
    console.log("El numero ingresado es impar");
}
/**Prueba de escritorio
 * Igual a 0
 *  numeroIngresado: 0
 *  salida esperada: "El numero ingresado es 0."
 * Numero par
 *  numeroIngresado: 8
 *  salida esperada: "El numero ingresado es par."
 * Numero Impar
 *  numeroIngresado: 13
 *  salida esperada: "El numero ingresado es impar."
 */ 
