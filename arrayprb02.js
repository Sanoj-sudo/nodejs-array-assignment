const printEvenNumbers = (numbers) => {
    return numbers.filter((value) => {
        return value % 2 === 0;
    });
}

console.log(printEvenNumbers([1,2,3,4,5,3]));