let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button")

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
                div.style.color = "gray";
                break;
            case "scissors": 
                playerScore++;
                div.textContent = "You win! Rock beats Scissors.";
                div.style.color = "green";
                break;
            case "paper":
                computerScore++;
                div.textContent = "You lose! Paper beats Rock.";
                div.style.color = "red";
                break;
        }
    } else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock": 
                computerScore++;
                div.textContent = "You lose! Rock beats Scissors.";
                div.style.color = "red";
                break;
            case "scissors": 
                div.textContent = "Tie.";
                div.style.color = "gray";
                break;
            case "paper":
                playerScore++;
                div.textContent = "You win! Scissors beats Paper.";
                div.style.color = "green";
                break;
        }
    } else if (humanChoice == "paper")  {
        switch (computerChoice) {
            case "rock": 
                playerScore++;
                div.textContent = "You win! Paper beats Rock.";
                div.style.color = "green";
                break;
            case "scissors": 
                computerScore++;
                div.textContent = "You lose! Scissors beats Paper.";
                div.style.color = "red";
                break;
            case "paper":
                div.textContent = "Tie.";
                div.style.color = "gray";
                break;
        }
    } else {
        console.log("You didn't pick Rock, Paper, or Scissors...");
    }
    body.appendChild(div);    

    const runningScore = document.createElement("div");
    runningScore.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
    body.appendChild(runningScore);

    if (playerScore >= 5) {
        const playerWon = document.createElement("div");
        playerWon.textContent = "Congratulations! You won!";
        playerWon.style.color = "gold";
        body.appendChild(playerWon);
        disableButtons();
    } else if (computerScore >= 5) {
        const computerWon = document.createElement("div");
        computerWon.textContent = (
            "Dang... Computer won. Refresh page to try again!"
        );
        computerWon.style.color = "maroon";
        body.appendChild(computerWon);
        disableButtons();
    }
}

buttons.forEach(function(button){
    button.onclick = function(){
        playRound(button.textContent, getComputerChoice());
    };
})

function disableButtons() {
    buttons.forEach(function(button){
        button.onclick = function(){};
    });
}