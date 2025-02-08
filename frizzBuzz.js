function frizzBuzz() {
    let num = 25;

    for (let i = 1; i <= num; i++) {  // Start from 1, not 0
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FrizzBuzz");  // Both 3 and 5
        } else if (i % 3 === 0) {
            console.log("Frizz");  // Only 3
        } else if (i % 5 === 0) {
            console.log("Buzz");  // Only 5
        } else {
            console.log(i);  // Print the number if not divisible by 3 or 5
        }
    }
}

// Call the function
frizzBuzz();
