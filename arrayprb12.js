
const evenNumberCounts = (numbers) =>{
    let count = 0;
    for (let index=0; index < numbers.length; index++){
        if (numbers[index] %2 ==0){
         count++;   
        }
    }
    return count;
}
console.log(evenNumberCounts([1,3,3,7,5,3,4,2]));