


const getBiggestNumber = (numbers) => {
    const biggestNumber = numbers.reduce((accumulator ,currentValue) => {
         if (currentValue > accumulator){
            accumulator = currentValue;
         }
         return accumulator;   
    },0);
    return biggestNumber;
}

console.log(getBiggestNumber([1,100,3,90,5,13])); 