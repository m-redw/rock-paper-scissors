let playerScore = 0;
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

    const body = document.querySelector("body");
    const div = document.createElement("div");
    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock": 
                div.textContent = "Tie"
                break;
            case "scissors": 
                playerScore++;
                div.textContent = "You win! Rock beats Scissors.";
                break;
            case "paper":
                computerScore++;
                div.textContent = "You lose! Paper beats Rock.";
                break;
        }
    } else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock": 
                computerScore++;
                div.textContent = "You lose! Rock beats Scissors.";
                break;
            case "scissors": 
                div.textContent = "Tie.";
                break;
            case "paper":
                playerScore++;
                div.textContent = "You win! Scissors beats Paper.";
                break;
        }
    } else if (humanChoice == "paper")  {
        switch (computerChoice) {
            case "rock": 
                playerScore++;
                div.textContent = "You win! Paper beats Rock.";
                break;
            case "scissors": 
                computerScore++;
                div.textContent = "You lose! Scissors beats Paper.";
                break;
            case "paper":
                div.textContent = "Tie.";
                break;
        }
    } else {
        console.log("You didn't pick Rock, Paper, or Scissors...");
    }
    body.appendChild(div);    

    const runningScore = document.createElement("div");
    runningScore.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
    body.appendChild(runningScore);
}

const buttons = document.querySelectorAll("button")
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        playRound(button.textContent, getComputerChoice());
    });
})