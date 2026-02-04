let a = 10 ;
let b = 30 ;
console.log("initial value of a = ",a + " and b = "+ b );


let temp ;

temp = a;
a = b ; 
b = temp ;

console.log(a,b);  //result will a=30, b=10  swaped with temp variable. 

// now lets swap without temp variable. 

a = a+b ;
b = a-b ;
a = a-b ;
console.log("Swaped again without temp variable (used addition & subtraction) ");
console.log(a , b);   