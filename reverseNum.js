let x = -124;

let reverse = function (x) {
    let rem = null;
    let reverse = 0;
    while (x !== 0) {

        rem = x % 10;
        x = Math.trunc(x / 10);  //used trunc to deal with negative numbers as floor will give result/quotient -13 for -124/10 and we need -12

        reverse = Number(reverse * 10 + rem);
    }
    return reverse > 2 ** 31 - 1 || reverse < -(2 ** 31) ? 0 : reverse;

}
  //if input -124 output -421 
console.log(reverse(x));