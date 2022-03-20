const getUnion = (parameter1,parameter2) =>{
    let storeUnionArrays = [...parameter1, ...parameter2]; 
    return [... new Set(storeUnionArrays)];
}
console.log(getUnion([1,2,3,4,5,3],[3,4,5,6])); 