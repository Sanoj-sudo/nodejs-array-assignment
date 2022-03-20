
const generateUniqElementsArray = (parameter1,parameter2) =>{
let   arr3 = parameter1.filter((data) => parameter2.indexOf(data) === -1);
let   arr4 = parameter2.filter((data) => parameter1.indexOf(data) === -1);
return [...arr3, ...arr4];
}
console.log(generateUniqElementsArray([1,2,3,4,5,3],[3,4,5,6]));
