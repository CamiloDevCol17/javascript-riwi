// Actividad Modulo 3 – Number y operaciones
// 1. Número a un nuevo número: Declara una variable num con un valor numérico y
// luego crea una nueva variable llamada newNum utilizando la función Number()
// para convertir num a un nuevo número. Muestra en consola newNum.

num = 5
newNum = Number(num)

console.log(newNum);


// 2. Rangos numéricos - Number.MAX_VALUE: Muestra en consola el valor máximo
// que puede ser representado en JavaScript utilizando Number.MAX_VALUE.
// Asignar el valor máximo representable en JavaScript a la variable maxNumber



let maxNumber = Number.MAX_VALUE;
console.log(maxNumber);


// 3. Rangos numéricos - Number.MIN_VALUE: Muestra en consola el valor mínimo
// positivo que puede ser representado en JavaScript utilizando
// Number.MIN_VALUE.


let minNumber = Number.MIN_VALUE;
console.log(minNumber);
// 4. Rangos numéricos - Number.MAX_SAFE_INTEGER: Muestra en consola el valor
// máximo seguro que puede ser representado con precisión en JavaScript
// utilizando Number.MAX_SAFE_INTEGER.

let maxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log(maxSafeInteger);


// 5. Rangos numéricos - Number.MIN_SAFE_INTEGER: Muestra en consola el valor
// mínimo seguro que puede ser representado con precisión en JavaScript
// utilizando Number.MIN_SAFE_INTEGER.

let minSafeInteger = Number.MIN_SAFE_INTEGER;
console.log(minSafeInteger);


// 6. Comprobación numérica - Number.isFinite(number): Declara una variable num
// y utiliza el método Number.isFinite() para comprobar si num es un número finito.
// Muestra el resultado en consola.

// numeroInfinito = isFinite(50)

// console.log(numeroInfinito);

// 7. Comprobación numérica - Number.isInteger(number): Declara una variable
// num y utiliza el método Number.isInteger() para comprobar si num es un
// número entero. Muestra el resultado en consola.

// numeroEntero = Number.isInteger(40)

// console.log(numeroEntero);


// 8. Comprobación numérica - Number.isSafeInteger(number): Declara una variable
// num y utiliza el método Number.isSafeInteger() para comprobar si num es un
// número seguro para representar con precisión en JavaScript. Muestra el
// resultado en consola.

// numeroSeguro = Number.isSafeInteger(50)

// console.log(numeroEntero);



// 9. Representación numérica - .toExponential(digits): Declara una variable num y
// utiliza el método .toExponential() para mostrar su representación en notación
// exponencial con un número específico de dígitos decimales. Muestra el resultado
// en consola.

// exponencial = (2).toExponential(2)

// console.log(exponencial);


// 10. Representación numérica - .toFixed(digits): Declara una variable num y utiliza
// el método .toFixed() para mostrar su representación con un número específico
// de dígitos decimales. Muestra el resultado en consola.


// decimales = (40/26).toFixed(8)


// console.log(decimales);

// 11. Representación numérica - .toPrecision(size): Declara una variable num y utiliza
// el método .toPrecision() para mostrar su representación con una longitud total
// específica. Muestra el resultado en consola.

// longitudTotal = 2535.3526.toPrecision(5)


// console.log(longitudTotal);



// Actividades Modulo 3
// Elaborado: RIWI 16 de noviembre de 2023
// 12. Convertir - Number.parseInt(text): Declara una variable text con un valor
// numérico en formato de cadena y utiliza Number.parseInt() para convertirlo a un
// número entero. Muestra el resultado en consola.

// numeroEnTexto = "20"

// convertirAEntero = Number.parseInt(numeroEnTexto)

// console.log(convertirAEntero);


// 13. Convertir - Number.parseInt(text, radix): Declara una variable text con un valor
// numérico en formato de cadena y utiliza Number.parseInt() con una base
// específica para convertirlo a un número entero. Muestra el resultado en consola.

// numeroEnTexto2 = "17"

// convertirAEntero2 = Number.parseInt(numeroEnTexto2, 15)


// console.log(convertirAEntero2);


// 14. Convertir - Number.parseFloat(text): Declara una variable text con un valor
// numérico en formato de cadena y utiliza Number.parseFloat() para convertirlo a
// un número de punto flotante. Muestra el resultado en consola.

// numeroEnTexto3 = "89.58"

// convertirAEntero3 = Number.parseFloat(numeroEnTexto3)

// console.log(convertirAEntero3);




// 15. Convertir - Number.parseFloat(text, radix): Declara una variable text con un
// valor numérico en formato de cadena y utiliza Number.parseFloat() con una
// base específica para convertirlo a un número de punto flotante. Muestra el
// resultado en consola.

// numeroEnTexto4 = "17.58"

// convertirAEntero4 = Number.parseFloat(numeroEnTexto4,6)

// console.log(convertirAEntero4);





// 16. Convertir - .toString: Declara una variable num y utiliza el método .toString()
// para convertirlo a una cadena. Muestra el resultado en consola.

textoANumero = 20

nuevo = (textoANumero).toString()


console.log(nuevo);



// 17. Método Math.abs(x): Declara una variable num con un valor negativo y utiliza
// Math.abs() para obtener su valor absoluto. Muestra el resultado en consola.

negativoAAbsoluto = Math.abs(-20)


console.log(negativoAAbsoluto);


// 18. Método Math.sign(x): Declara una variable num con un valor y utiliza
// Math.sign() para obtener su signo. Muestra el resultado en consola.

signo = Math.sign(-20)


console.log(signo);
// 19. Método Math.exp(x): Declara una variable num y utiliza Math.exp() para calcular
// la exponenciación de num. Muestra el resultado en consola.

num = Math.exp(10)


console.log(num);

// 20. Método Math.expm1(x): Declara una variable num y utiliza Math.expm1() para
// calcular e^x - 1. Muestra el resultado en consola.

num = Math.expm1(1)


console.log(num);


// 21. Método Math.max(a, b, c...): Utiliza Math.max() para encontrar el valor máximo



console.log(Math.max(1, 40, 30, 20 , 50));


// entre varios números. Muestra el resultado en consola.
// 22. Método Math.min(a, b, c...): Utiliza Math.min() para encontrar el valor mínimo
// entre varios números. Muestra el resultado en consola.

console.log(Math.min(1, 40, 30, 20 , 50));

// 23. Método Math.pow(base, exp): Utiliza Math.pow() para calcular la potencia de un
// número. Muestra el resultado en consola.


console.log(Math.pow(5, 3))


// 24. Método Math.sqrt(x): Utiliza Math.sqrt() para calcular la raíz cuadrada de un
// número. Muestra el resultado en consola.


console.log(Math.sqrt(25));



// 25. Método Math.cbrt(x): Utiliza Math.cbrt() para calcular la raíz cúbica de un
// número. Muestra el resultado en consola.


console.log(Math.cbrt(25));



// 26. Método Math.imul(a, b): Utiliza Math.imul() para calcular la multiplicación de
// dos números como un entero de 32 bits. Muestra el resultado en consola.

console.log(Math.imul(10 , 5));



// 27. Método Math.clz32(x): Utiliza Math.clz32() para contar los ceros principales de
// un número en su representación de 32 bits. Muestra el resultado en consola.

console.log(Math.clz32(32));

// Actividades Modulo 3
// Elaborado: RIWI 16 de noviembre de 2023
// 28. Método Math.random(): Utiliza Math.random() para generar un número
// pseudoaleatorio entre 0 (inclusive) y 1 (exclusive). Muestra el resultado en
// consola.

console.log(Math);




// 29. Método de redondeo - Math.round(x): Utiliza Math.round() para redondear un
// número al entero más cercano. Muestra el resultado en consola.



console.log(Math.round(20.5));
// 30. Método de redondeo - Math.ceil(x): Utiliza Math.ceil() para redondear hacia
// arriba un número al entero más cercano. Muestra el resultado en consola.

console.log(Math.ceil(20.4));
// 31. Método de redondeo - Math.floor(x): Utiliza Math.floor() para redondear hacia
// abajo un número al entero más cercano. Muestra el resultado en consola.

console.log(Math.floor(20.6));

// 32. Método de redondeo - Math.fround(x): Utiliza Math.fround() para convertir un
// número a su representación de punto flotante de 32 bits más cercana. Muestra el
// resultado en consola.


console.log(Math.fround(25.35));




// 33. Método de redondeo - Math.trunc(x): Utiliza Math.trunc() para truncar la parte
// decimal de un número. Muestra el resultado en consola.

console.log(Math.trunc(20.5));
// 34. Método trigonométrico - Math.sin(x): Utiliza Math.sin() para calcular el seno de
// un ángulo en radianes. Muestra el resultado en consola.

console.log(Math.sin(20));


// 35. Método trigonométrico - Math.cos(x): Utiliza Math.cos() para calcular el coseno
// de un ángulo en radianes. Muestra el resultado en consola.


console.log(Math.cos(20));

// 36. Método trigonométrico - Math.tan(x): Utiliza Math.tan() para calcular la
// tangente de un ángulo en radianes. Muestra el resultado en consola.

console.log(Math.tan(20));



// 37. Método trigonométrico - Math.hypot(a, b...): Utiliza Math.hypot() para calcular
// la longitud de la hipotenusa de un triángulo a partir de sus lados. Muestra el
// resultado en consola.

console.log(Math.hypot(20, 5, 30));


// 38. Operadores aritméticos con .toFixed(digits), Number.parseInt(text): Declara
// dos variables numéricas y realiza una operación aritmética que involucre
// .toFixed() y Number.parseInt(). Muestra el resultado en consola.


a = 2.32565 
b = "4" 

console.log((a * parseInt(b)).toFixed(4)) ;



// 39. Operadores aritméticos con Number.parseFloat(text), .toPrecision(size):
// Declara dos variables numéricas en formato de cadena y realiza una operación
// aritmética que involucre Number.parseFloat() y .toPrecision(). Muestra el
// resultado en consola.


a = 2.32565 
b = "4.236" 

console.log((a * parseFloat(b)).toPrecision(8)) ;


// 40. Operadores aritméticos con Math.random(), Math.abs(x): Utiliza
// Math.random() para generar un número y realiza una operación aritmética que
// involucre Math.abs(). Muestra el resultado en consola.


random = Math.random()*10

console.log(Math.abs(-20)* random);



// 41. Operadores aritméticos con Math.random(), .toString: Utiliza Math.random()
// para generar un número y realiza una operación aritmética que involucre
// .toString(). Muestra el resultado en consola.

random2 = Math.random()*10 

console.log((random2).toString());

// 42. Operadores aritméticos con Math.random(), Math.exp(x): Utiliza
// Math.random() para generar un número y realiza una operación aritmética que
// involucre Math.exp(). Muestra el resultado en consola.

random3 = Math.random() * 10

console.log(Math.exp(random3));



// Actividades Modulo 3
// Elaborado: RIWI 16 de noviembre de 2023
// 43. Operadores aritméticos con Math.sqrt(x), Math.clz32(x): Utiliza Math.sqrt() y
// Math.clz32() para realizar una operación aritmética. Muestra el resultado en
// consola.


bits = Math.clz32(20)

console.log(Math.sqrt(bits));




// 44. Operadores de asignación con Asignación: Declara una variable x con un valor y
// asigna ese valor a otra variable y. Muestra el valor de y en consola.

x = 2
y = x

console.log(y);



// 45. Operadores de asignación con a += b: Declara dos variables numéricas y utiliza
// el operador += para sumar el valor de la segunda variable a la primera. Muestra el
// resultado en consola.


a = 2
b = 5



a += b

console.log(a);





// 46. Operadores de asignación con Suma y asignación: Declara dos variables
// numéricas y utiliza el operador += para incrementar el valor de la primera variable
// sumándole el valor de la segunda. Muestra el resultado en consola.

a = 10
b = 12

a += b

console.log(a);



// 47. Operadores de asignación con Resta y asignación: Declara dos variables
// numéricas y utiliza el operador -= para decrementar el valor de la primera
// variable restando el valor de la segunda. Muestra el resultado en consola.


num = 20
num2 = 3

num -= num2

console.log(num);



// 48. Operadores de asignación con Multiplicación y asignación: Declara dos
// variables numéricas y utiliza el operador *= para multiplicar el valor de la primera
// variable por el valor de la segunda. Muestra el resultado en consola.

num = 20
num2 = 3

num *= num2

console.log(num);



// 49. Operadores de asignación con División y asignación: Declara dos variables
// numéricas y utiliza el operador /= para dividir el valor de la primera variable por el
// valor de la segunda. Muestra el resultado en consola.

num = 20
num2 = 3

num /= num2

console.log(num);


// 50. Operadores de asignación con Módulo y asignación: Declara dos variables
// numéricas y utiliza el operador %= para calcular el residuo de la división de la
// primera variable por la segunda. Muestra el resultado en consola.

num = 20
num2 = 3

num %= num2

console.log(num);


// 51. Operadores de asignación con Exponenciación y asignación: Declara una
// variable numérica y utiliza el operador **= para elevarla a una potencia
// específica. Muestra el resultado en consola.


num = 20
num2 = 3

num **= num2

console.log(num);




// 52. Operadores unarios Incremento: Declara una variable numérica y utiliza el
// operador ++ para incrementar su valor en 1. Muestra el resultado en consola.


a = 2

a++

console.log(a);

// 53. Operadores unarios Decremento: Declara una variable numérica y utiliza el
// operador -- para decrementar su valor en 1. Muestra el resultado en consola.

a = 5
a--

console.log(a);


// 54. Operadores unarios Incremento previo: Declara una variable num con un valor
// numérico. Utiliza el operador unario de incremento previo (++num) para
// aumentar el valor de num en 1 antes de asignarlo a la variable result. Muestra el
// nuevo valor de result en la consola.

a = 20
result = ++a
console.log(result);
console.log(a);

// 55. Operadores unarios Decremento previo: Declara una variable num con un valor
// numérico. Utiliza el operador unario de decremento previo (--num) para disminuir
// el valor de num en 1 antes de asignarlo a la variable result. Muestra el nuevo
// valor de result en la consola.

a = 20
result = --a
console.log(result);
console.log(a);




// 56. Operadores unarios Resta unaria: Declara una variable num con un valor
// numérico. Utiliza el operador unario de resta (-num) para obtener el opuesto 
// numérico de num y asigna el resultado a la variable result. Muestra el valor
// resultante en la consola.



num = 20
result = -num
console.log(result);




