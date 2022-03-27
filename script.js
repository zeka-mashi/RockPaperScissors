function computerPlay() {
    const plays = ['rock', 'paper', 'scissors']
    return plays[Math.floor(Math.random() * plays.length)]
}

function formatMove(selection) {
    return selection.charAt(0).toUpperCase() + selection.slice(1);
}

function outputLog(msg) {
    var newMsg = document.createElement("p");
    newMsg.textContent = msg;
    const log = document.getElementsByClassName("log")[0];
    log.prepend(newMsg);
}

function runGame(playerSelection, computerSelection) {
    let selection = playerSelection.toLowerCase()
    switch (true) {
        case (selection === "rock" && computerSelection === "rock"):
            outputLog(formatMove(selection) + " vs. " + formatMove(computerSelection) + "! It's a tie!")
            return 0
        case (selection === "rock" && computerSelection === "scissors"):
            outputLog("You win! " + formatMove(selection) + " beats " + formatMove(computerSelection) + "!")
            return 1
        case (selection === "scissors" && computerSelection === "scissors"):
            outputLog(formatMove(selection) + " vs. " + formatMove(computerSelection) + "! It's a tie!")
            return 0
        case (selection === "scissors" && computerSelection === "paper"):
            outputLog("You win! " + formatMove(selection) + " beats " + formatMove(computerSelection) + "!")
            return 1
        case (selection === "paper" && computerSelection === "paper"):
            outputLog(formatMove(selection) + " vs. " + formatMove(computerSelection) + "! It's a tie!")
            return 0
        case (selection === "paper" && computerSelection === "rock"):
            outputLog("You win! " + formatMove(selection) + " beats " + formatMove(computerSelection) + "!")
            return 1
        default:
            outputLog("Awww, you lost! " + formatMove(computerSelection) + " beats your " + formatMove(selection) + "!")
            return -1
    }
}

var userScore = 0
var computerScore = 0
var turns = 0

function playRound() {
    var action = this.dataset.action
    let score = runGame(action, computerPlay())
    turns += 1;
    if (score < 0) {
        computerScore += 1
    } else {
        userScore += score
    }
    /* for (let i = 0; i < 5; i++) {
        let score = runGame(prompt("Enter your move: "), computerPlay())
        if (score < 0) {
            computerScore += 1
        } else {
            userScore += score
        }
    } */
    outputLog("Score: " + userScore + "-" + computerScore)
    if (userScore == 5) {
        outputLog("You won!")
        const actions = document.querySelectorAll('.action');
        actions.forEach(action => action.removeEventListener('click', playRound));
        actions.forEach(action => action.classList.add("disabled"));
    } else if (computerScore == 5) {
        outputLog("You lost!")
        const actions = document.querySelectorAll('.action');
        actions.forEach(action => action.removeEventListener('click', playRound));
        actions.forEach(action => action.classList.add("disabled"));
    }
    outputLog("-------- [Turn " + turns + "] --------")
}

const actions = document.querySelectorAll('.action');
actions.forEach(action => action.addEventListener('click', playRound));