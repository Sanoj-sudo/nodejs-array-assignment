
const getBelowThresholdValue = (numbers,thresholdValue) =>{
  const  store = numbers.filter ((value) =>{
        return value < thresholdValue;
    });
    return store.length;
}

console.log(getBelowThresholdValue([9,2,3,4,5,3,6],3));  