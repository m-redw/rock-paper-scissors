let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let rand = Math.random() * 30 + 1;

    if (rand <= 10) {
        return "rock";
    } else if (rand <= 20) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors? Choose!");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock": 
                console.log("Tie.");
                break;
            case "scissors": 
                console.log("You win! Rock beats Scissors.");
                humanScore++;
                break;
            case "paper":
                console.log("You lose! Paper beats Rock.");
                computerScore++;
                break;
        }
    } else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock": 
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
                break;
            case "scissors": 
                console.log("Tie.");
                break;
            case "paper":
                console.log("You win! Scissors beats Paper.");
                humanScore++;
                break;
        }
    } else if (humanChoice == "paper")  {
        switch (computerChoice) {
            case "rock": 
                console.log("You win! Paper beats Rock.");
                humanScore++;
                break;
            case "scissors": 
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
                break;
            case "paper":
                console.log("Tie.");
                break;
        }
    } else {
        console.log("You didn't pick Rock, Paper, or Scissors...");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);