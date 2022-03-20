const printEvenNumbers = (numbers) => {
    const evenNumbers = [];
    for (let index=0; index < numbers.length; index++){
      if (numbers[index] % 2 === 0){
          evenNumbers.push(numbers[index]); 
        }
    }
    return evenNumbers;
}

console.log(printEvenNumbers([1,2,3,4,5,3])); 
