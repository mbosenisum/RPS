console.log("hello");
console.log(game());


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

function getPlayerChoice() {
    let ps = prompt("enter 'rock', 'paper', or 'scissors'").toLowerCase();
    console.log("player choice: " + ps);
    if (ps !== "rock" && ps !== "paper" && ps !== "scissors") {
        console.log("please enter 'rock', 'paper', or 'scissors'");
        return getPlayerChoice();
    }
    return ps;
}

function playRound(playerSelection, computerSelection) {
    let message;
    console.log(playerSelection + " vs. " + computerSelection);
    if (playerSelection == computerSelection) {
        return "tie";
    }
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            message = "you lose! " + playerSelection + " loses to " + computerSelection;
            return "lose";
        }
        if (computerSelection == "scissors") {
            message = "you win! " + playerSelection + " beats " + computerSelection;
            return "win";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            message = "you lose! " + playerSelection + " loses to " + computerSelection;
            return "lose";
        }
        if (computerSelection = "paper") {
            message = "you win! " + playerSelection + " beats " + computerSelection;
            return "win";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            message = "you lose! " + playerSelection + " loses to " + computerSelection;
            return "lose";
        }
        if (computerSelection = "rock") {
            message = "you win! " + playerSelection + " beats " + computerSelection;
            return "win";
        }
    }
    return;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound(getPlayerChoice(), getComputerChoice());
        if (round == "win") {
            playerScore++;
        }
        else if (round == "lose") {
            computerScore++;
        }
        console.log(round);
    }

    if (computerScore > playerScore) {
        console.log("computer wins");
    }
    else if (playerScore > computerScore) {
        console.log("you win");
    }
    else {
        console.log("tie");
    }

    console.log("score: " + playerScore + " - " + computerScore);
    return;
}