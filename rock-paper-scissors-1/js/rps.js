//script for rock paper scissors

console.log("Hello World!");
let humanScore = 0;
let computerScore = 0;
	
//play a round

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result = winner(); 
    return console.log(`Human chose ${humanChoice}. Computer chose ${computerChoice}. ${result}`);

    //function to determine who wins or if draw or catch a typo
    function winner() {
            if (humanChoice === computerChoice) {
            return "Result is a tie!";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock"))	{
            humanScore++;
            return "Human wins!";
        } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "paper") ||
            (computerChoice === "paper" && humanChoice === "rock"))	{ 
            computerScore++;
            return "Computer wins!";
        } else { return "PLEASE CHOOSE A VALID HAND THROW" }
        }
    }


//computer choice
//generate a random number 
//then assign the random number a bucket 
//and return the assigned bucket

function getComputerChoice() {
    const compChoice = Math.random();      
    function computerChoice() {
        if (compChoice < 0.33) {
        return "rock";
    } else if (compChoice >= 0.67) {
        return "scissors";
    } else return "paper";
    }
    return computerChoice();
}

//human choice
//prompt human to enter
//trim the user choice in case of a space after word
//convert to lowercase
//return the choice
function getHumanChoice() {
    let userChoice = prompt("Choose: rock, paper, or scissors");
    let trimmed = userChoice.trim();
    let humChoice = trimmed.toLowerCase();
    return humChoice;
}

//game time
function playGame() {
    playRound();
    console.log(`Human ${humanScore} - ${computerScore} Computer`);
    playRound();
    console.log(`Human ${humanScore} - ${computerScore} Computer`);
    playRound();
    console.log(`Human ${humanScore} - ${computerScore} Computer`);
    playRound();
    console.log(`Human ${humanScore} - ${computerScore} Computer`);
    playRound();
    console.log(`Human ${humanScore} - ${computerScore} Computer`);

    if (humanScore > computerScore) {
        console.log(`Human Wins ${humanScore}-${computerScore}`);
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore < computerScore) {
        console.log(`Computer Wins ${computerScore}-${humanScore}`);
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore = computerScore) {
        console.log(`The game was a tie! ${humanScore}-${computerScore}`);
        humanScore = 0;
        computerScore = 0;
    }
    
    console.log(`The score has been reset to ${humanScore} - ${computerScore}. Refresh the page to play again.`)
}

playGame();