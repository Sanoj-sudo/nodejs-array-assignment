const getExtractDigits = (parameter) =>{
    let storeExtractedDigits = [];
    while (parameter > 0){
        storeExtractedDigits.unshift(parameter %10) ;
        parameter = parseInt(parameter/10);
    }
    return storeExtractedDigits;
}
console.log(getExtractDigits(1234));  
