
const getZippedArray = (parameter1,parameter2) =>{
  let zipElements = [];
  for (let index = 0; index < parameter2.length; index++ ){
    zipElements.push([parameter1[index],parameter2[index]]);
  }
  return zipElements;
}
console.log(getZippedArray ([1,2,3],[4,5,6]));