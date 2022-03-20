const printReverseArray = (numbers) =>{
      const storeReverseArray = [];
      for (let index = numbers.length-1; index >=0; index-- ){
           storeReverseArray.push(numbers[index]);
      }
return storeReverseArray;
}

console.log(printReverseArray([1,2,3,4,5,3]));