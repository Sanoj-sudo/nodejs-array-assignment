
const getSecondElements = (elements) =>{
  let numbers = [];
  for(let index = 0; index < elements.length; index++){
    if (index % 2 == 0){
      numbers.push(elements[index]); 
    }
  }
  return numbers;
}

console.log(getSecondElements([1,2,3,-1,2,4,3,1]));
  