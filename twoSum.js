let nums = [1, 2, 7, 11, 15];
let target = 9;
// Two Sum problem using a brute force approach with two for-loops 
let twoSumBF = function (nums, target) {
    //  loop through each element  
    for (let i = 0; i < nums.length; i++) {
        // compare with other element 
        for (let j = i + 1; j < nums.length; j++) {
            let total = nums[i] + nums[j];
            if (total === target) {
                console.log([i, j]);
                return [i, j];

            }

        }
    }
    return console.log("false - no way possible ");



};
twoSumBF(nums, target);

//crons : it has time complexity of O(n^2) as two nested loops present . 




// there also other ways  with 1 loop , and arithmatic/math
// we can think our target number 9 , so we get first 2 so we need to find number 7 for two sum to meet target 
// we can store the first number and  find the rest if match , other wise we will store next number and iterate again. 


// function twoSumOneloop(nums, target) {
//     let store = {};

//     for (let i = 0; i < nums.length; i++) {

//         if (store[nums[i]] !== undefined) return [store[nums[i]], i]
//         store[target - nums[i]] = i;
//     }
// }
// let res = twoSumOneloop(nums, target);
// console.log(typeof (res), " result is ", res);



// more cleaner code with map and set ES6 features 


let twoSumWithMap = function (nums , target) {
     let trackMap = new Map()
      
     for(let i = 0 ; i < nums.length ; i++ ) {

         if(trackMap.has(nums[i])){
            return [trackMap.get(nums[i]), i ] ;
         }
         let complement = target-nums[i] ;
         trackMap.set(complement, i ) ;

     }


}


let res = twoSumWithMap(nums , target ) ; 

console.log("With Map and one loop ",res ) ; 

