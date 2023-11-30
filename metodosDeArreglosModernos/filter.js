let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

let result = [];

for(let i = 0; i < arr.length; i++ ){
    const item = arr[i]

    if (item >= 5 && item <= 11) {
        result.push(item)
    }
}
console.log(arr);
console.log(result);
// Esta es la logica que usa filter


// Filter nos regresa un arreglo nuevo

let result2 = arr.filter((item, index)=>{
    return item >= 5 && item <= 11
})


console.log(result2);