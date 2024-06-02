function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;
    //se debe declarar el indice;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    //devuelve la suma y no un arreglo;
    return suma;
}
// guardo el arreglo con sus parametros en una variable;
let sumaDeArreglo: number = sumarArreglo([34,65])
//muestro la variable anterior en consola;
console.log(`La suma del arreglo es ${sumaDeArreglo}`);

//la funcion debe devolver una variable de tipo number;
function obtenerPromedio(arr:number[]):number {    
    let suma: number = sumarArreglo(arr);
    //el promedio se obtiene de la division de la suma entre la cantidad de elementos del arreglo;
    let promedio: number = suma / arr.length;
    //devuelvo la variable promedio, no lo muestro en consola;
    return promedio
}
//muestro el promedio llamando a la funcion y dandole los parametros;
console.log(`El promedio es ${obtenerPromedio([12,65])}`);