// Import the built-in 'readline' module to read user input from the terminal
const readline = require('readline');

// Create an input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to enter a number
rl.question('Enter a number: ', (input) => {
    // Convert the input to an integer
    const num = parseInt(input);

    // Check if the input is a valid number
    if (isNaN(num) || num <= 0) {
        console.log("Invalid input! Please enter a positive number.");
    } else {
        // Function to calculate factorial
        function factorial(n) {
            if (n === 0 || n === 1) return 1;
            return n * factorial(n - 1);
        }

        // Loop from the entered number down to 1
        for (let i = num; i > 0; i--) {
            // Calculate factorial for the current number
            let fact = factorial(i);
            
            // Display the result
            console.log(`${i} factorial is ${fact}`);
        }
    }

    // Close the input stream
    rl.close();
});
