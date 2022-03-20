let num1 =[1,2,3,4,5,3];
let num2 =[3,4,5,6]; 

 let getIntersection = num1.filter((curElem) =>{
    return num2.includes(curElem);
  });

console.log([... new Set(getIntersection)]);

