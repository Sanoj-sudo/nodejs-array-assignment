const removeDuplicateElements = (parameter) =>{
    let uniqueElements = [];
    for (let index = 0; index <parameter.length; index++){
        if (!uniqueElements.includes(parameter[index])){
          uniqueElements.push(parameter[index]);
        }   
  }
  return uniqueElements;
}
console.log(removeDuplicateElements([1,2,3,4,5,3])); 