
const oddNumberCounts = (numbers) =>{
    let count =0;
    for (let index=0; index < numbers.length; index++){
        if (numbers[index] %2 !==0){
         count++;   
        }
    }
    return count;
}
console.log(oddNumberCounts([1,3,3,7,5,3,4])); 