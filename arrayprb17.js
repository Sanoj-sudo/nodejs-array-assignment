const checkArrayAscendigOrder = (parameter) =>{
    for (let index = 0; index <parameter.length; index++){
        if (parameter[index+1] - parameter[index] < 0) return false;
    }
    return true;
} 
console.log(checkArrayAscendigOrder([1,1,1,5,6,8]));