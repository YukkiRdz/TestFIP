/**Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo 
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero
 */

// import * as rls from "readline-sync";
// let numero: number = rls.questionInt("Ingrese un numero entero: ");
// let numero2: number = rls.questionInt("Ingrese otro numero para comprobar si es multiplo del anterior: ");

// function esMultiplo(num: number, multiploDe: number): boolean {
//     return num% multiploDe === 0;
// }

// let multiplo: boolean = esMultiplo(numero,numero2);
// console.log(multiplo);

        // function esMultiplo(num: number, multiploDe: number): boolean {
        //     return num % multiploDe === 0;
        // }

        // let multiplo: boolean = esMultiplo(10,2);

// cantidad de divisores

        // function cantidadDeDivisiores(numero: number): number {
        //     let cantidad = 0

        //     for (let i = 1; i <= numero; i++) {
        //         if (esMultiplo(numero, i)) {
        //             cantidad++;
        //         }
        //     }
        //     return cantidad
        // }
        // console.log(cantidadDeDivisiores(5));

//impresion de nombre
import * as rls from "readline-sync";

function imprimirNombre(nombre: string, apellido: string): string {
    let nombreCompleto: string = nombre + " " + apellido;
    return nombreCompleto;
}
let nombreYApellido: string = imprimirNombre("Thiago", "Rodriguez"); 
console.log(nombreYApellido);