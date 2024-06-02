let texto: string = 'Estoy muy nervioso'

// Variables globales incializadas en cero para contar cada letra
let contadorDeA: number = 0;
let contadorDeE: number = 0;
let contadorDeO: number = 0;

// recorre el texto e incrementa los contadores de 'A', 'E' y 'O'
for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a" || texto[i] === "A") {
        contadorDeA++;
    } else if (texto[i] === "e" || texto[i] === "E") {
        contadorDeE++; 
    } else if (texto[i] === "o" || texto[i] === "O") {
        contadorDeO++;
    }
}
// Las cantidades estan almacenadas en este arreglo
let arreglo: number[] = [contadorDeA, contadorDeE,contadorDeO];
console.log(arreglo);