
const getSmallestNumber = (numbers) => {
    const smallestNumber = numbers.reduce((accumulator ,currentValue) => {
         if (currentValue < accumulator){
            accumulator = currentValue;
         }
        return accumulator;
    });
    return smallestNumber;
}

console.log(getSmallestNumber([-2,2,3,4,5,9,-1])); 