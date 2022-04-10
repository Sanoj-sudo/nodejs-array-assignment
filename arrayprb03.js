const printSum = (numbers) => {
    const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue ;
    }, 0)
    return sum;
}

console.log(printSum([1,2,3,4,5,3]));