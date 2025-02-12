const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Your Name: ', (input) => {
    console.log(`Your Name is: ${input}`);
    rl.close();
});