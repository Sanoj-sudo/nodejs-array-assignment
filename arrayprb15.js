const getReverseOrderArray = (parameter) =>{
    let storeReverseOrder =[];
    let count = 0;
    for (let index= parameter.length -1; index >=0; index--){
        storeReverseOrder[count] = parameter[index];
        count++;
    }
    return storeReverseOrder;
}
console.log(getReverseOrderArray([1,2,3,4,5,3]));