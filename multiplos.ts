/**Cree un algoritmo que visualice los
números que son múltiplos de 2 o
de 3 que hay entre 1 y 100
• Tener en cuenta que hay números
que son múltiplos de 2 y de 3 al
mismo tiempo
• En dichos casos, solamente
indique el número una vez */

/**numero: number;
 *multiplos2 : number;
 *multiplos3 : number;
 *multiploDeAmbos : number;
 *
 * para cada numero desde el 1 hasta el 100 cada 1 paso {
 *  si el numero es divisible por 2 y no por 3 {
 *  asignar el numero a multiplo2;
 *  mostrar "el numero es multiplo de 2.";
 * }
 * 
 *  si el numero es divisible por 3 y no por 2 {
 *  asignar el numero a multiplo3;
 *  mostrar "el numero es multiplo de 3.";
 * }
 * 
 * si el numero es divisible por 2 y por 3 {
 *  asignar el numero a multiploDeAmbos;
 *  mostrar "el numero es multiplo de ambos.";
 * }
 */

let numero : number;
let multiplo2 : number;
let multiplos3 : number;
let multiploDeAmbos : number;

// Iterar sobre los números del 1 al 100
for (let numero = 1; numero <= 100; numero++) {
    // Verificar si el número es múltiplo de 2
    if (numero % 2 === 0 && numero % 3 !== 0) {
        // Mostrar el número si es múltiplo de 3 y no de 3.
        multiplo2 = numero;
        console.log(multiplo2, "es multiplo de 2.");
    }
    if (numero % 3 === 0 && numero % 2 !== 0) {
        // Mostrar el número si es múltiplo de 3 y no de 2.
        multiplos3 = numero;
        console.log(multiplos3, "es multiplo de 3.");
    }
    if (numero % 2 === 0 && numero % 3 === 0) {
        // Mostrar el número si es múltiplo de ambos.
        multiploDeAmbos = numero;
        console.log(multiploDeAmbos, "es multiplo de 2 y de 3");
    }
}