function numTree() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('Enter a number: ', (input) => {
        let num = parseInt(input);
        const fixedSize = 15;
        
        for (let i = 1; i <= num; i++) {
            let line = i;

            line += '+'.repeat(num - i + 1);

            for (let j = i; j <= 2 * i - 1; j++) {
                line += j % 10;
            }

            for (let j = 2 * i - 2; j >= i; j--) {
                line += j % 10;
            }

            line += '+'.repeat(num - i + 1);

            line += i;

            console.log(line);
        }
        
        for (let k = num; k <= fixedSize; k++) {
            console.log(' '.repeat(fixedSize));
        }

        rl.close();
    });
}

numTree();
