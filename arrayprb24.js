
const checkSubset = (set,subset) =>{
    const result = subset.every(value => set.includes(value));
    return result;
}
console.log(checkSubset([1,2,3,4,5,3],[3,4,5,6]));  
    