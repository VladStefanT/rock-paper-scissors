console.log("Hello world");
const choices = ["rock", "paper", "scissors"];

function game() {
    // This is the main function
    // 5 Round 
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    // get input from player
    let input = prompt("Type rock, paper or scissors: ");
    while ( input == null) {
        input = prompt("Type rock, paper or scissors: ");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input =prompt("Type rock, paper or scissors: ");
        while ( input == null) {
            input = prompt("Type rock, paper or scissors: ");
        }
        input = input.toLocaleLowerCase();
        check = validateInput(input);
    }
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

// Function to checkWinner by comparing player's choice and computer's choice by looping through all options

function checkWinner(choiceP, choiceC) {
    if ((choiceP == 'rock' && choiceC == 'scissors') || (choiceP == 'paper'  && choiceC == 'rock') || (choiceP == 'scissors' && choiceC == 'paper')) {
        return 'Player';
    } else if ((choiceP == 'rock' && choiceC == 'paper') || (choiceP == 'paper' && choiceC == 'scissors') || (choiceP == 'scissors' && choiceC == 'rock')) {
        return 'Computer';
    } else {
        return 'Tie';
    }
}

game();