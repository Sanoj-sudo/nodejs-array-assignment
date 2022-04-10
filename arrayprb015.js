const getReverseOrderArray = (number) =>{
    let reverseArray =[];
    number.forEach((number) =>{
        reverseArray.unshift(number);
    })
    return reverseArray;
}
console.log(getReverseOrderArray([1,2,3,4,5,3]));  