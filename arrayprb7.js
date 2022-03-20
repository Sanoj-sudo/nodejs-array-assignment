
 const getBigNumber = (numbers) =>{
    let storeBigNumbers = 0;
    for (let index =0; index < numbers.length; index++){
        if (numbers[index] > storeBigNumbers){
            storeBigNumbers = numbers[index]; 
        }
    }
    return storeBigNumbers;
}
console.log(getBigNumber([1,26,3,5,76,99,100])); 