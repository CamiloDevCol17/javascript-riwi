let arreglo = [2,4,6,8,10,12]

for (let i = 0; i < arreglo.length; i++) {
    const item = arreglo[i]
    const index = i;


    console.log(  `El item ${item} se encuentra en la posición, ${index}`);
}

// Asi es como funciona el metodo for each, es muy parecido a ennumerate de python, primero nos da el valor y luego nos da el indice.

//For each siempre nos va a pedir el retorno con una funcion 


arreglo.forEach((item, index)=>{
    console.log( `El item ${item} se encuentra en la posición, ${index}`);
})


//Vemos como funciona el método for each, desde la manera en que se hace desde la function, y desde la simplificacion que nos da el método como tal.


//Dato muy importante: El metodo for each no nos regresa un nuevo arreglo, para eso existe la function map.



