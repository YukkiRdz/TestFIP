/**Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. 
 */

import * as rls from "readline-sync";

let base : number = rls.questionInt("Ingrese el numero base: ");
let exponente : number = rls.questionInt("Ingrese el numero exponente: ");
let potencia : number = 0;

potencia = calcularPotencia(base, exponente);

while (exponente < 0) {    
        console.log("Debe ingresar un numero mayor o igual a 0.");
        exponente = rls.questionInt("Ingrese el numero exponente: ");
        potencia = calcularPotencia(base, exponente);
}


function calcularPotencia (base : number, exponente : number): number {
    let potencia : number = 0;
    if (exponente > 0) {
        //en typescript se usa ** en vez de ^ para potenciacion
        potencia = base**exponente;
        console.log("La potencia de", base, "^", exponente ,"es: ", potencia);

    } else if (exponente == 0) {
            console.log ("La potencia del numero ingresado es 1");
        }
    return potencia;
}

