// 1.	Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos.

let a = 1;
let b = 5;

console.log(a + b);

// 2.	Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.

let simpleString1 = "Hola "
let simpleString2 = "Mundo"

console.log((simpleString1 + simpleString2).length);

// 3.	Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript" y stringUsingString2 con el valor "Ejercicios".

let stringUsingString1 =  String("JavaScript")
let stringUsingString2 = String("Ejercicios")


// 4.	Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 con el valor "Strings".

let stringUsingNewString1 = new String ("Concatenar");
let stringUsingNewString2 = new String ("Strings");

// 5.	Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.
console.log(simpleString1.substring(2));

// 6.	Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola.
console.log(simpleString2.includes("ndo"));

// 7.	Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola.
console.log([].concat(simpleString1, simpleString2).join(""));

// 8.	Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola.
console.log(simpleString1 + simpleString2);

// 9.	Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola.
console.log(`${simpleString1} ${simpleString2}`);

// 10.	Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola.

stringWithSpaces1 = "  TrimStart"
stringWithSpaces2 = "TrimEnd "

console.log(stringWithSpaces1.trimStart());
console.log(stringWithSpaces2.trimEnd());

// 11.	Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola.
console.log(simpleString1.replace("o", "i"))

// 12.	Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola.

console.log(simpleString2.slice(0, 3));

// 13.	Utiliza el método substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2 e imprime el resultado en consola.
console.log(simpleString2.substring(2));

// 14.	Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola.
console.log(simpleString1.repeat(2));

// 15.	Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.

let cadena = "Esto es una oración de ejemplo"
cadenaArray = cadena.split(" ")

console.log(cadenaArray);


// 16.	Convierte la variable simpleString2 a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.
console.log(simpleString2.toLocaleUpperCase());

// 17.	Convierte la variable simpleString1 a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.
console.log(simpleString1.toLocaleLowerCase());

// 18.	Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().
let booleano = true 

console.log(typeof(booleano));

// 19.	Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.
arreglo = [1,2,3,4,5,6,7,10,25,30]

console.log(arreglo.length);

// 20.	Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.

let objeto = {
    nombre: "Dayron",
    apellido: "Zapata",
    edad: 20
}

console.log(objeto.nombre);


// 21.	Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().
let nulo = null
console.log(typeof(nulo));

// 22.	Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

let indefinido 

console.log(typeof(indefinido));

// 23.	Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

decimal = 2.43

console.log(typeof(decimal));

// 24.	Declara una variable negativo y asígnale un número negativo. Muestra en consola su tipo de dato utilizando el operador typeof().
negativo = -2

console.log(typeof(negativo));
// 25.	Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola.

console.log("casa".indexOf("a"));

// 26.	Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola.
console.log(stringUsingString1.includes("Script"))



// 27.	Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola.

console.log([].concat(simpleString1, simpleString2).join(""));

// 28.	Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.

hola = "hola"
mundo = "Mundo"

console.log(hola + mundo);

// 29.	Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola.
// 30.	Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ". Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola.
// 31.	Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.
// 32.	Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola.
// 33.	Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript" que comience en el índice 2 e imprime el resultado en consola.
// 34.	Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola.
// 35.	Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.
// 36.	Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.
// 37.	Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.
// 38.	Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof().
// 39.	Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().
// 40.	Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.
// 41.	Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.
// 42.	Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().
// 43.	Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().
// 44.	Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().
