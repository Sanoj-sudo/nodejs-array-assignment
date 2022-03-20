
const getReverseFibo = (param) =>{
   let fiboNumbers   = [];
   const reverseFibo = [];
   
   fiboNumbers[0] = 0;
   fiboNumbers[1] = 1;
   
   // storing fibonic series 
   for (let index =2 ; index <param; index++ ){
     fiboNumbers[index] = fiboNumbers[index-2] + fiboNumbers[index-1];    
   }

   // reversing the fibonic series 
   for (let index = param-1; index >=0; index-- ){
        reverseFibo.push(fiboNumbers[index]);
   }
  return reverseFibo; 
}
console.log(getReverseFibo(8));  


