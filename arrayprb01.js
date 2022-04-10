 
const printOddNumbers = (numbers) => {
    return numbers.filter((value) => {
        return value % 2 !==0;   
    });
}

console.log(printOddNumbers([1,2,3,4,5,3]));
