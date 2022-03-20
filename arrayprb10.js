const getIndexLengths = (parameter) =>{
    const storeLengths = [];
    for (let index = 0; index <parameter.length; index++){
         storeLengths[index] = parameter[index].length;
    } 
    return storeLengths;
}
console.log(getIndexLengths(["mary","had","a","little","lamb"])); 