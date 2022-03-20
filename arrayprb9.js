
const getAverageNumber = (numbers) =>{
    let storeAverageNumber = 0;
    for (let index = 0; index < numbers.length; index++ ){
        storeAverageNumber = storeAverageNumber+numbers[index];
    }
    return (storeAverageNumber/numbers.length);
}
console.log(getAverageNumber([1,2,3,4,5]));