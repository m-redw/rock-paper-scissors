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
                return("tie");
            case "scissors": 
                console.log("You win! Rock beats Scissors.");
                return("player");
            case "paper":
                console.log("You lose! Paper beats Rock.");
                return("computer");
        }
    } else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock": 
                console.log("You lose! Rock beats Scissors.");
                return("computer");
            case "scissors": 
                console.log("Tie.");
                return("tie");
            case "paper":
                console.log("You win! Scissors beats Paper.");
                return("player");
        }
    } else if (humanChoice == "paper")  {
        switch (computerChoice) {
            case "rock": 
                console.log("You win! Paper beats Rock.");
                return("player");
            case "scissors": 
                console.log("You lose! Scissors beats Paper.");
                return("computer");
            case "paper":
                console.log("Tie.");
                return("tie");
        }
    } else {
        console.log("You didn't pick Rock, Paper, or Scissors...");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        let winner = playRound(playerSelection, computerSelection);
        
        if (winner === "player") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("You Win!");
    } else if (humanScore < computerScore) {
        console.log("You Lose!");
    } else {
        console.log("You Tied.")
    }
}

playGame();