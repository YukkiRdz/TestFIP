function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;
    //se debe declarar el indice
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    //devuelve la suma y no un arreglo
    return suma;
}
// guardo el arreglo en una variable
let sumaDeArreglo: number = sumarArreglo([34,65])
//muestro la variable anterior en consola
console.log(sumaDeArreglo);