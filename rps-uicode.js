console.log("hello");


function getComputerChoice() {
    randnum = (Math.floor(Math.random() * 100) % 3);
    switch (randnum) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        default:
            computerSelection = "scissors";
            break;
    }
    return computerSelection;
}

let playerScore = 0;
let computerScore = 0;

const playRound = e => {
    let playerSelection = e.target.id.toLowerCase();
    let computerSelection = getComputerChoice();


    let message;
    console.log(playerSelection + " vs. " + computerSelection);
    console.log(playerScore + " - " + computerScore);
    if (playerSelection == computerSelection) {
        return "tie";
    }
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            //message = "you lose! " + playerSelection + " loses to " + computerSelection;
            computerScore++;
        }
        if (computerSelection == "scissors") {
            //message = "you win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            //message = "you lose! " + playerSelection + " loses to " + computerSelection;
            computerScore++;
        }
        if (computerSelection = "paper") {
            //message = "you win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            //message = "you lose! " + playerSelection + " loses to " + computerSelection;
            computerScore++;
        }
        if (computerSelection = "rock") {
            //message = "you win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
        }
    }

    if (playerScore == 5) {
        console.log(`${playerScore} - ${computerScore}`);
        playerScore = 0;
        computerScore = 0;
        return;
    }
    else if (computerScore == 5) {
        console.log(`${computerScore} - ${playerScore}`);
        playerScore = 0;
        computerScore = 0;
        return;
    }
}

const buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.addEventListener('click', playRound);
};
