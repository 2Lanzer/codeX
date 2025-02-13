function calculateFactorial(n) {
    let factorial = 1;
    
    // Loop to calculate factorial
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    return factorial;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a positive integer: ', (input) => {
    const n = parseFloat(input);
    
    // Condition to check for valid input
    if (isNaN(n) || n < 0) {
        console.log("Invalid input! Please enter a valid integer.");
    } else if (!Number.isInteger(n)) {
        console.log("Invalid input! Please enter a whole number.");
    } else {
        // Call the function and display result
        for (let i = n; i > 0; i--) {
            const result = calculateFactorial(i);
            console.log(`Factorial of ${i} is: ${result}`);
        }
    }
    
    rl.close();
});
