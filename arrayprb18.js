const checkArrayDescendigOrder = (parameter) =>{
    for (let index = 0; index <parameter.length; index++){
        if (parameter[index+1] - parameter[index] > 0 ) return false;
    } 
    return true;   
} 
console.log(checkArrayDescendigOrder([3,3,3,2,1]));   