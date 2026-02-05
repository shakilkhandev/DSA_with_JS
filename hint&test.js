let str = "   Hello, I am shakil khan  " ;


//trim() method removes  white spcaes from both side of the string. 
//toUpperCase() method converts the string to uppercase letters.
// toLowerCase () method converts the string to lowercase letters. 

console.log(str.trim().toLowerCase());

let arrOfStr = str.trim().split(" ");
//Split a string into substrings using the specified separator and return them as an array.

console.log(arrOfStr);

let isHelloPresent = str.includes("Hello");
console.log(isHelloPresent);
let isHelloPresentInArray  = arrOfStr.includes("Hello,");
console.log(isHelloPresentInArray);

let numArray = [2,2,2,8,9,101,4];
console.log(numArray.sort());

//only sort() will not sort the number in correct order because it converts the number to string and then sort them.
//to sort the number in correct order we need to pass a compare function to the sort() method.
numArray.sort((a,b) => a-b);
console.log(numArray);








