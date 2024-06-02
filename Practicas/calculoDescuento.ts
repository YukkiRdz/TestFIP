/**•Implemente un algoritmo que calcule y muestre 
por pantalla el precio final de un producto 
después de aplicarle un descuento
• El precio inicial del producto es $450,50
• El descuento a aplicar es del 10%. Recuerde que 
puede obtener el 10% de un valor multiplicado por 0,1
• El precio y el descuento deben ser guardados en 
variables (no ingresados por teclado)
 */

/**Declarar:
 *precioInicial = $450.5;
 *porcentajeDescuento = 0.1;
 *descuento = precioInicial * 0.1;
    multiplico el precioInicial por porcentajeDescuento para saber cuanto es el valor descuento en pesos
 *precioDescuento = precioInicial menos el descuento;
    al precioInicial le resto el resultado de descuento;
 *mostrar el precioInicial y luego el precioDescuento;
  */

let precioInicial : number = 450.50;
let descuento : number = precioInicial * 0.1;
let precioDescuento : number = precioInicial - descuento;

console.log("El precio inicial del producto es: $", precioInicial);
console.log("El precio con un 10% de descuento es: $", precioDescuento);

/**Prueba de escritorio
 * no hay datos de entrada;
 * dato de salida1: El precio inicial del producto es: $450.5;
 * dato de salida2: El precio con un 10% de descuento es: $405.45;
 */