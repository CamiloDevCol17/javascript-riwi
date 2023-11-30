// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// function contarCaracteres(saludo = "hola mundo") {
//     catacteres = saludo.length
//     if (saludo.length == 10)
//     console.log(saludo, "tiene", catacteres, "caracteres");

//     else
//     console.log("Hay que laburar");


// }

// contarCaracteres()





// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// function recortarTexto(texto = "", longitud = "") {  
//     total = texto.slice(0,longitud)

//     console.log("la palabra recortada es", total);
// }

// recortarTexto("hola mundo", 4)






// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// function separador(nombre = "") {


//     if (!nombre) {
//         console.log("Poné algo!!")
//     }

//     else
//     division = nombre.split(" ")

//     console.log(division);
// }

// separador("hola como se encuentra el dia de hoy en esta")


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


// function multiplicador (texto ="", veces = undefined) {

    
//     (!texto)
//     ? console.log("Pon algo")
//     : (veces === undefined)
//       ?console.log("No ingresaste el numero de veces que desees que se reputa la cadena")
//       :repeticion = texto.repeat(veces) 
//       console.log(repeticion);
// }

// multiplicador("hola mundo ", 4)




// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


function contarCaracteres(cadenaDeTexto = "") {
    longitud = cadenaDeTexto.length
    if (longitud < 20) {
        console.log("La oración cadena de texto contiene " + longitud  +  " caracteres");
    }else{
        console.log("No quiero contar eso");
    }
}


contarCaracteres("Holaaaaaaaaaaaaaaaaaa");

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function recortar(cadenaDeTexto = "", desdeDonde) {

    cadenaDeTexto.split()

    if (cadenaDeTexto) {
        
    }
}


saludo = "hola Mundo"

console.log(saludo.slice(4))


