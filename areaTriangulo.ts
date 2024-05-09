/**Calculo del area de un triangulo

variable base
variable altura
area =  base x altura

le pido al usuario que ingrese la base y la altura
multiplico la base y la altura para dar como resultado el area del triangulo
devuelvo el resultado */

import * as rls from "readline-sync";

let  base : number = rls.questionInt("Ingrese la base del triangulo: ");
let altura : number = rls.questionInt("Ingrese la altura del triangulo: ");
let area : number = base * altura;
console.log("El area del triangulo es: ",area);
