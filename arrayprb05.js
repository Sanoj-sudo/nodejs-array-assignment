
const getSecondElements = (elements) =>{
    const arr =[];
    elements.forEach((elements, index)=>{
        if(index % 2 ===0){
            arr.push(elements);
        }

    });
    return arr;
}

console.log(getSecondElements([1,2,3,-1,2,4,3,1]));