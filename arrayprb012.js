
const getEvenCount = (numbers) => {
    const evenCount = numbers.reduce((accumulator ,currentValue) => {
         if (currentValue %2 ===0 ){
            accumulator++;
         }    
        return accumulator ;
    },0);
return evenCount;
}

console.log(getEvenCount([1,4,2,1,5,9,3,5])); 