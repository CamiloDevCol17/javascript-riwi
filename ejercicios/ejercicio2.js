// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// function alReves(texto="") {
//     reverse = texto.split("").reverse().join("")

//     console.log(reverse);
// }


// alReves("Hola Mundo")

// alReves("Hola Mundo")
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
function contar(texto ="",  palabra = "") {

    let i = 0
    let contador = 0
    while (i !== -1) {
        i = texto.indexOf(palabra, i)
        if (i !== -1) {
        i++;
        contador++;  
        }

    }

    return console.log("la palabra" , palabra, "se repite", contador, "veces");

}

contar("Hola mundo, adios mundo, mundo, mundo", "mundo")

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function palindromo(palabra = "") {
    palabra.
}


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.