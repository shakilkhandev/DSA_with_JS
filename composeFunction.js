const fnArray = [x=>x+1 , x=>x+2 , x=>x+3 ];

const composeFn = (fn,num) =>{

  
  return function (num )  {
    let result ;
    let input = num || 2 ;
    
    for (var i = fn.length-1 ; i>=0; i--){
      
      result = fn[i](input);
      input = result ;
      
    }  
    return result ;
  }();
}

console.log(composeFn(fnArray));    
