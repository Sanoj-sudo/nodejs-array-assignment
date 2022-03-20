const rotateArray = (array, value) =>{
    return [...array.slice(value,array.length), ...array.slice(0,value)]
} 
console.log(rotateArray([1,2,3,4,5],4));