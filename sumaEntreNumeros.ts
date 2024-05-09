/**Escriba un programa que pida al usuario dos números 
enteros, y luego retorne la suma de todos los números 
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar 
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27 */

/**declarar numeroIngresado1 ---> variable number;
 * declarar numeroIngresado2 ---> variable number;
 * declarar numeroInicial ----> variable number = numero menor (Math.min);
 * declararnumeroFinal ----> variable number = numero mayor (Math.max);
 * declarar suma -----> variable number;
 * 
 * pedir al usuario que ingrese el primer numero;
 * pedirle al usuario que ingrese el segundo numero;
 * descubrir el numero menor para que inicie el for correctamente
 * para numeroInicial hasta numeroFinal cada 1 paso {
 * suma es la suma de ambos numeros y los numeros entre ellos;
 * }
 * mostrar '"La suma de los números entre", numeroIngresado1, "y", numeroIngresado2, "es:", suma';
 */

import * as rls from "readline-sync";

let numeroIngresado1 : number = rls.questionInt("Ingrese el primer numero: ");
let numeroIngresado2 : number = rls.questionInt("Ingrese el segundo numero: ");
let suma : number = 0;

//para iniciar siempre el for con el numero menor
let numeroInicial : number = Math.min(numeroIngresado1, numeroIngresado2);
let numeroFinal : number = Math.max(numeroIngresado1, numeroIngresado2);



for (numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
    suma += numeroInicial;

}
console.log("La suma de los números entre", numeroIngresado1, "y", numeroIngresado2, "es:", suma);

/**PRUEBA DE ESCRITORIO
 * Dato de entrada1: 2;
 * Dato de entrada2: 9;
 * Dato de salida: "La suma de los números entre 2 y 9 es: 44";
 * 
 * Dato de entrada1: 7;
 * Dato de entrada2: 28;
 * Dato de salida: "La suma de los números entre 2 y 9 es: 385";
 */