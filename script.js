function computerPlay() {
    const plays = ['rock', 'paper', 'scissors']
    return plays[Math.floor(Math.random() * plays.length)]
}

function formatMove(selection) {
    return selection.charAt(0).toUpperCase() + selection.slice(1);
}

function runGame(playerSelection, computerSelection) {
    let selection = playerSelection.toLowerCase()
    switch(true) {
        case(selection === "rock" && computerSelection === "rock"):
            console.log(formatMove(selection) + " vs. " + formatMove(computerSelection) + "! It's a tie!")
            return 0
        case(selection === "rock" && computerSelection === "scissors"):
            console.log("You win! " + formatMove(selection) + " beats " + formatMove(computerSelection) + "!")
            return 1
        case(selection === "scissors" && computerSelection === "scissors"):
            console.log(formatMove(selection) + " vs. " + formatMove(computerSelection) + "! It's a tie!")
            return 0
        case(selection === "scissors" && computerSelection === "paper"):
            console.log("You win! " + formatMove(selection) + " beats " + formatMove(computerSelection) + "!")
            return 1
        case(selection === "paper" && computerSelection === "paper"):
            console.log(formatMove(selection) + " vs. " + formatMove(computerSelection) + "! It's a tie!")
            return 0
        case(selection === "paper" && computerSelection === "rock"):
            console.log("You win! " + formatMove(selection) + " beats " + formatMove(computerSelection) + "!")
            return 1
        default:
            console.log("Awww, you lost! " + formatMove(computerSelection) + " beats your " + formatMove(selection) + "!")
            return -1
    }
}

function game() {
    let userScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let score = runGame(prompt("Enter your move: "), computerPlay())
        if (score < 0) {
            computerScore += 1
        } else {
            userScore += score
        }
    }
    if (userScore == computerScore) {
        console.log("Score: " + userScore + "-" + computerScore + ". Wow, it's a tied game!")
    } else if (userScore > computerScore) {
        console.log("Score: " + userScore + "-" + computerScore + ". Congrats! You win!")
    } else {
        console.log("Score: " + userScore + "-" + computerScore + ". Sorry, you lost this time!")
    }
}

game()