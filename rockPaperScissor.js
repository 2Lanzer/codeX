function rockPaperScissors() {
    console.log("Welcome to ROCK-PAPER-SCISSORS!");

    // Get user input and normalize to lowercase
    let input = prompt("Your move (rock, paper, scissors): ").toLowerCase();

    // List of valid moves
    const moves = ["rock", "paper", "scissors"];
    
    // Check if the input is valid
    if (!moves.includes(input)) {
        console.log("Invalid move! Choose rock, paper, or scissors.");
        return;
    }

    // Generate random computer choice
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    console.log(`You: ${input} VS Computer: ${computerMove}`);

    // Determine the winner
    if (input === computerMove) {
        console.log("It's a TIE!");
    } else if (
        (input === "rock" && computerMove === "scissors") ||
        (input === "paper" && computerMove === "rock") ||
        (input === "scissors" && computerMove === "paper")
    ) {
        console.log("YOU WIN!");
    } else {
        console.log("YOU LOSE!");
    }
}

// Run the game
rockPaperScissors();
