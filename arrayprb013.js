
const getAboveThresholdValue = (numbers,thresholdValue) =>{
   const numbersAboveThresholdValue = numbers.filter ((value) =>{
        return value > thresholdValue;
    });
    return numbersAboveThresholdValue.length;
}

console.log(getAboveThresholdValue([9,2,3,4,5,3,6],3));  