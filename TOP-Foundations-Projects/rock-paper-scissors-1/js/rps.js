//script for rock paper scissors

let humanScore = 0;
let computerScore = 0;
let resultText = document.getElementById("throw-result");
let hscore = document.getElementById("human-score");
let cscore = document.getElementById("computer-score");
	
//play a round

function playRound(humanChoice, computerChoice) {
    humanChoice = choice;
    computerChoice = getComputerChoice();
    result = winner(); 
    resultText.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${result}`;
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;

    //function to determine who wins or if draw or catch a typo
    function winner() {
            if (humanChoice === computerChoice) {
            return "Result is a tie!";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock"))	{
            humanScore++;
            return "You win!";
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

let gameResult = document.getElementById("final-result");

function gameFinal() {
    if (humanScore == 3 && humanScore > computerScore) {
        gameResult.textContent = `You won ${humanScore} - ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 3 && humanScore < computerScore) {
        gameResult.textContent = `Computer won ${computerScore} - ${humanScore}`;
        humanScore = 0;
        computerScore = 0;
    } else {gameResult.textContent = "Keep playing! It's best 3 of 5"}
}

//human choice from button input
let choice = '';

let rock = document.getElementById('Rock');
let paper = document.getElementById('Paper');
let scissors = document.getElementById('Scissors');

rock.addEventListener("click", () => {
    choice = 'rock';
    playRound();
    gameFinal();
});

paper.addEventListener("click", () => {
    choice = 'paper';
    playRound();
    gameFinal();
});

scissors.addEventListener("click", () => {
    choice = 'scissors';
    playRound();
    gameFinal();
});

// GAME RESET //


