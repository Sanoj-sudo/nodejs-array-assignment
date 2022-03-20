 const printSum = (numbers) => {
    let sum = 0;
    for (let index=0; index < numbers.length; index++){
      sum = sum+ (numbers[index]);
    }
    return sum;
}

console.log(printSum([1,2,3,4,5,3]));
