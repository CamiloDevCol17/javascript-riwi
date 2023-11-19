//Hoisting: En JavaScript, hoisting te permite usar funciones y variables antes de que se hayan declarado. 

//Funcion clásica - Hoisting

function saludar(nombre) {
    return "Hola " + nombre
}

console.log(saludar("pepe")); 

// Funciones anonimas = Son  funciones que no tienen nombre y que necesitamos almacenar en alguna variable para poderlas llamar después.
// NO hoisting 


let saludo = function(nombre) {
    return "Saludos " + nombre
}


console.log(saludo("Polo")); 


//funciones flecha () => {} (1ra = Es una funcion anonima. 2nda = No necesita la palabra reservada function, return tampoco es necesario).

let saludo2 = (nombre) => "saludos " + nombre


console.log(saludo2("Andres"));


//Dato adcional: Si deseo usar las llaves debo retornar