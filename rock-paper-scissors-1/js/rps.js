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

let choice = '';

let rock = document.getElementById('Rock');
let paper = document.getElementById('Paper');
let scissors = document.getElementById('Scissors');

rock.addEventListener("click", () => {
    choice = 'Rock';
    console.log(choice);
});

paper.addEventListener("click", () => {
    choice = 'Paper';
    console.log(choice);
});

scissors.addEventListener("click", () => {
    choice = 'Scissors';
    console.log(choice);
});