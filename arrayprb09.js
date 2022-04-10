
const getAverage = (numbers) => {
    const averageNumber = numbers.reduce((accumulator ,currentValue) => {
        accumulator=accumulator+currentValue;
      return accumulator;
    },0)
    return averageNumber/numbers.length;
}

console.log(getAverage([1,2,3,7])); 