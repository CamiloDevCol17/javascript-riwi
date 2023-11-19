// Pre-incremento y Post-incremento

// let x = 1
// let y = ++x //Preincremento = Se incrementa y de una se agrega ese valor a la variable

// console.log(x);
// console.log(y);

// let z = x++  // Postincremento = Toma el valor de la variable y luego se incrementa

// console.log(z);
// console.log(x);


// Switch


// let operacion = 0
// switch (operacion) {
//     case 0:
//         console.log("La operacion es igual a 0");
//         break;
//     case 7:
//         console.log("La operacion es igual a 7");
//         break
//     default:
//         console.log("JAJAJAJ");
// }


//Funciones

// function saludar(nombre) {
//     return "Hola " + nombre;
// }

// console.log(saludar("pepe"));
// console.log(saludar("andres"));
// console.log(saludar("felipe"));

//Funcion  tipo clase

function Inventario(Nombre) {
    this.nombre = nombre;
    this.articulos = [];
}

Inventario.prototype.getNombre = function() {
    return this.nombre
}

