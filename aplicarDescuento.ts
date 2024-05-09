/**•Desarrolle un algoritmo que diga el precio de 
una compra 
• La compra se compone del precio del producto 
y la cantidad
•Si el cliente gasta más de $1000 debemos 
aplicarle un descuento del 10% */

/**precioProducto----> variable;
 * cantidad----> variable;
 * porcentajeDescuento = 0.1;
 * descuento = precioProducto * porcentajeDescuento;
 * precioCompra = precioProducto * cantidad
 * precioCompraDescuento = precioCompra - descuento;
 * 
 * pido precio del producto y la cantidad del mismo;
 * mientras precioCompra sea mayor a 1000 {
 * se le aplica el descuento;
 * se da el mensaje del precioCompraDescuento;
 * }
 * 
 * si precioCompra es menor o igual a 1000 {
 * devuelvo el precioCompra
 * }
 * 
 */

/**Prueba de escritorio
 * Datos de entrada:
 *  precioProducto : 800
 *  cantidad : 2
 * Datos de salida:
 *  El precio de tu compra es: 1520
 * 
 * Datos de entrada:
 *  precioProducto : 200
 *  cantidad : 5
 * Datos de salida:
 *  El precio de tu compra es: 100
 * 
 * Datos de entrada:
 *  precioProducto : 100
 *  cantidad : 1
 * Datos de salida:
 *  El precio de tu compra es: 100
 */

import * as rls from "readline-sync";

let precioProducto : number = rls.questionInt("Ingrese el precio del producto: ");
let cantidad : number = rls.questionInt("Ingrese la cantidad del producto: ");
let porcentajeDescuento : number = 0.1;
let descuento : number = precioProducto * porcentajeDescuento;
let precioCompra : number = precioProducto * cantidad;
let precioCompraDescuento : number = precioCompra - descuento;

if (precioCompra <= 1000) {
    console.log("El precio de tu compra es: ",precioCompra);
} else {
    console.log("El precio de tu compra es: ",precioCompraDescuento);
}