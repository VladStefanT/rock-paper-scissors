console.log("Hello world");
const choices = ["rock", "paper", "scissors"];

function game () {
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
    let input = prompt("Type rock, paper, scissors: ");
    input = input.toLowerCase();
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

game();