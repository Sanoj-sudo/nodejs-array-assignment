
const getIndexLengths = (numbers) => {
    const store = numbers.map((element) => {
         return element.length;
    },0);
    return store;
}

console.log(getIndexLengths(["mary","had","a","little","lamb"])); 
