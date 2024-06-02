
function establecerColorPorNota(valor: number): string {
    //declaro las variables rojo, verde y gris como string para luego devolverlas con return
    let rojo: string = 'El color es rojo';
    let verde: string = 'El color es verde';
    let gris: string = 'El color es gris';
   //el tipo de "siete" es string y debe ser number;
   //la funcion debe devolver los elementos de tipo string;
   //el operador logico and se escribe &&;
    if (valor >= 0 && valor < 7) {
        return rojo;
    }
    else if ( valor >=7 && valor <= 10) {
        return verde;
    } else {
        return gris;
    }
}
//muestro por consola para ver si funciona correctamente, dandole un valor manualmente
console.log(`El color es ${establecerColorPorNota(10)}`);