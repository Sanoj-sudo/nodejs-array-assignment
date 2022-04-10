
const getPartionArray = (numbers, thresold) =>{
    const numbersBelowThresold = [];
    const numbersAboveThresold = [];

    numbers.forEach(number => {
        (number <= thresold) ? 
        numbersBelowThresold.push(number) : 
        numbersAboveThresold.push(number);
    })
        
    return  [numbersBelowThresold, numbersAboveThresold];
}
console.log(getPartionArray([1,2,7,4,9,10,5],5));
