let RandomArray = [1, 3, 4, 2, 5, 7, 6, 8];
// let RandomArray = [1,2,3,4,5];

console.log("Initial array = ", RandomArray);




//bubble sort Algorthm ;

for (let i = 0; i < RandomArray.length - 1; i++) {


    let swaped = false
    for (let j = 0; j < RandomArray.length - 1; j++) {
 
        if (RandomArray[j] > RandomArray[j + 1]) {
            let temp = RandomArray[j];
            RandomArray[j] = RandomArray[j + 1];
            RandomArray[j + 1] = temp;
            swaped = true;
        }


    }
    console.log("operation performed");

    if (!swaped) {    // flag ensure if array is sorted then loop should break means no unnessecary  iteration ;
        break;
    }



}


//check the array is sorted or not
console.log("After  bubble sort ",RandomArray);