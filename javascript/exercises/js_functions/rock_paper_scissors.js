// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.
// Our code will break the game into four parts:

// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

// ** Bonus Task: Make this game better by adding a secret cheat code. If a user types 'bomb' as their choice, then make sure they win, no matter what.

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") return userInput;
    else console.log("Choose either rock, paper or scissors");
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === "bomb") return "You destroyed your opponent, CONGRATS!"
    if(userChoice === computerChoice) return "The game is tie";
    if(userChoice === "rock"){
        if(computerChoice === "paper") return "Computer won!";
        else return "User won!";
    }
    if(userChoice === "paper"){
        if(computerChoice === "scissors") return "Computer won!";
        else return "User won!";
    }
    if(userChoice === "scissors"){
        if(computerChoice === "rock") return "Computer won!";
        else return "User won!";
    }
}

const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log(`Your choice is: ${userChoice}`);
    console.log(`The computer choice is: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();