let arr = ["Juan", "Marcos", "lena", "Sergio"];


let result = [];


for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    const index = i;
    

    console.log(  `El item ${item} se encuentra en la posición, ${index}`);

    result.push(item)
}

console.log(result);


//El map funciona de una manera muy similiar al metodo for each, con la diferencia de que map si nos regresa un nuevo arreglo


let result2 = arr.map((item, index)=>{
    return( `El item ${item} se encuentra en la posición, ${index}`);
})


console.log(result2);

// Como en este caso map si nos retorna algo, debemos usar return para que se almacene en la nueva variable