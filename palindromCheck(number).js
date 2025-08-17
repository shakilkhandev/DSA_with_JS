/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     
      if(x<0){
        return 0 ;
      };

      let rem = 0 ;
      let rev = 0 ;
      let d = x ; //divisor 

      while(d > 0){    // divide until d become zero and with reminder make a reverse of input    x
        rem = d % 10;
        rev = (rev * 10) + rem ;
        d = Math.floor(d/10);
      }
      

      if(rev == x ){
             return true;
      }
      console.log(rev);
      return false ;

};
