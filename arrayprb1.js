const printOddNumbers = (numbers) => {
    const oddNumbers = []
    for ( let index=0; index < numbers.length; index++ ) {
        if ( numbers[index] % 2 !== 0){
            oddNumbers.push(numbers[index]);   
        }
    }
    return oddNumbers;
}

console.log(printOddNumbers([1,2,3,4,5,3])); 
