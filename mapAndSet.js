// In JS, we often use Objects as hash maps, but the Map and Set classes are built specifically for data structures. 
// Map: Unlike Objects, Map keys can be anything (objects, functions, numbers).
//  They also have a .size property, making them much cleaner for frequency counting.

// Set: Best for keeping track of "seen" elements.
//  Converting an array to a set ([...new Set(arr)]) is the fastest way to remove duplicates. 



// basic map in js (similar to java's HashMap what use hash fn to store and retrieve values effciently ) 
let myMap = new Map([["id","0067"],["firstName", "Shakil"] ]);

myMap.set("lastName", "Khan");

console.log(myMap.get("id")); 


//map is iterable  but plain object does not have built in iterability
//map key types in map can be anydata type but in object it is string or symbol only
//map key are ordered by insertion  
//map do not have a default keys like object has prototype keys

