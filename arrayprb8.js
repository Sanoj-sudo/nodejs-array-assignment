
const getSmallNumber = (numbers) =>{
    let storeSmallNumbers = 0;
    for (let index =0; index < numbers.length; index++){
        if (numbers[index] < storeSmallNumbers){
            storeSmallNumbers = numbers[index];  
        }
    }
    return storeSmallNumbers;
}
console.log(getSmallNumber([1,26,3,5,0,-1]));  