function sumArray(arr1, arr2) {
    let totalOne = 0;
    let totalTwo = 0;

    // Loop through arr1 and sum values
    for (let i = 0; i < arr1.length; i++) {
        totalOne += arr1[i];
    }

    // Loop through arr2 and sum values
    for (let j = 0; j < arr2.length; j++) {
        totalTwo += arr2[j];
    }

    // Compute final sum
    let sum = totalOne + totalTwo;

    // Determine which array has the bigger total
    let biggestArray;
    if (totalOne > totalTwo) {
        biggestArray = "arr1";
    } else if (totalTwo > totalOne) {
        biggestArray = "arr2";
    } else {
        biggestArray = "equal"; // If both are the same
    }

    // Return an object containing all values
    return { sum, totalOne, totalTwo, biggestArray };
}

let list_one = [1, 3, 5, 7, 9];   // Sum: 25
let list_two = [2, 4, 6, 8, 10];  // Sum: 30

console.log(sumArray(list_one, list_two));
