let array = [1,6,3,20,5,3];
let sortedArray = [ ];

for( let  i=0;i<array.length;i++){
  let min = array[i];
  
  for(let j=i+1; j< array.length ; j++ ){
     if(min > array[j] ){
       let temp = min ;
       min = array[j] ;
       array[j] = temp ; 
       console.log(min);
     }
     
     
  }
  
  sortedArray.push(min);
  
  
  
}

console.log(sortedArray);
