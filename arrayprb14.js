const getBelowThresholdValue = (parameter1,parameter2) =>{
    let count =0;
    for (let index=0; index <parameter1.length; index++){
        if (parameter1[index] < parameter2){
            count++;
        } 
    }
    return count;
}
console.log(getBelowThresholdValue([1,2,3,4,5,3,6],3));