
const printReverseArray = (numbers) => {
    const arr = [];
    numbers.forEach((number) => {
      arr.unshift(number)  
    })
    return arr;
}

console.log(printReverseArray([1,9,8,7,5,6]));