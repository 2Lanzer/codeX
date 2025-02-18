/*
The challenge here is that the number of n values is undetermined, 
and your current approach only handles a single n. To solve this, 
you need to iterate through all the n values and count how many of them are A.

Clarification of the Problem
You need to:

Count how many times the value A appears in a collection of n values, which can be either A, B, or C.
The number of n values is unknown (undetermined).
*/

function getPair(nValues) {
    let pairA = 0;
    let pairB = 0;
    let pairC = 0;
    
    // Loop through all n values
    for (let n of nValues) {
        if (n === 'A') {
            pairA++;
        } else if (n === 'B') {
            pairB++;
        } else if (n === 'C') {
            pairC++;
        }
    }
    
    console.log(`A: ${pairA}, B: ${pairB}, C: ${pairC}`);
    return pairA;
}

// Example usage
let n = ['A', 'B', 'C', 'A', 'A', 'B'];
console.log("Number of A's:", getPair(n));  // Output: Number of A's: 3
