
const oddNumberCounts = (numbers) => {
    const oddCount = numbers.reduce((accumulator ,currentValue) => {
         if (currentValue %2 !==0 ){
            accumulator++;
         }    
        return accumulator ;
    },0);
return oddCount;
}

console.log(oddNumberCounts([1,1,4,8,5,9,3,5])); 