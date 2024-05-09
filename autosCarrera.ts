//completar 4 vueltas
//programa para ingresar por teclado el tiempo de cada vuelta
//debe devolver el tiempo total y el promedio de vuelta

import * as rls from "readline-sync";

const vueltas : number = 4;

let tiempoVuelta1 : number;
let tiempoVuelta2 : number;
let tiempoVuelta3 : number;
let tiempoVuelta4 : number;
let totalVueltas : number;
let promedioVueltas : number;

tiempoVuelta1 = rls.questionInt("Cuanto tiempo tardo en dar la primera vuelta?: ");
console.log("El tiempo de la primera vuelta es: ", tiempoVuelta1);
tiempoVuelta2 = rls.questionInt("Cuanto tiempo tardo en dar la segunda vuelta?: ");
console.log("El tiempo de la primera vuelta es: ", tiempoVuelta2);
tiempoVuelta3 = rls.questionInt("Cuanto tiempo tardo en dar la tercer vuelta?: ");
console.log("El tiempo de la primera vuelta es: ", tiempoVuelta3);
tiempoVuelta4 = rls.questionInt("Cuanto tiempo tardo en dar la cuarta vuelta?: ");
console.log("El tiempo de la primera vuelta es: ", tiempoVuelta4);

totalVueltas = tiempoVuelta1 + tiempoVuelta2 + tiempoVuelta3 + tiempoVuelta4;
console.log("El tiempo total es: ", totalVueltas);
promedioVueltas = totalVueltas / vueltas
console.log("El tiempo promedio es: ", promedioVueltas);

/** vueltas = 4 -----> constante
 * le pido al usuario que coloque el tiempo de cada vuelta y se lo devuelvo en cada caso
 * sumo el tiempo de cada vuelta para descubrir el tiempo total
 * devuelvo el tiempo total
 * al tiempo total lo divido entre la cantidad de vueltas dadas
 * devuelvo el tiempo promedio
*/