const firstOccurencePosition = (parameter1,parameter2) =>{
    let position = 0 ;
    for (let index = 0 ; index <parameter1.length; index++){
        if (parameter1[index] === parameter2){
            position = index;
        }
    }
    return position;
}
console.log(firstOccurencePosition([1,2,3,4,5,3],4)); 