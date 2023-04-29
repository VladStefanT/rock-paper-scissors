const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let cpuScore = 0;
let tieCount = 0;
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const pScorePara = document.querySelector('.playerScore');
const cScorePara = document.querySelector('.computerScore');
const tiePara = document.querySelector('.tieCount');
const restults = document.querySelector('.results');



function cpuChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}


rockBtn.addEventListener('click', function() {
    playRound('rock', cpuChoice());
});

paperBtn.addEventListener('click', function() {
    playRound('paper', cpuChoice());
});

scissorsBtn.addEventListener('click', function() {
    playRound('scissors', cpuChoice());
});


function endGame() {
    if ( playerScore === 5) {
        pScorePara.innerText = `You: ${playerScore}`;
        restults.innerText = 'Result: You won!';
    } else if (cpuScore === 5) {
        cScorePara.innerText = `Computer: ${cpuScore}`;
        restults.innerText = 'Result: You lost';
    } else if (tieCount === 5){
        tiePara.innerText = `Tie: ${tieCount}`;
        restults.innerText = 'Result: Tie!!';
    }
}


function playRound(playerSelection, cpuSelection) {
    if (playerScore < 5 && cpuScore < 5 && tieCount < 5) {
        console.log('1', playerSelection, '2', cpuSelection);
        if (playerSelection == cpuSelection) {
            tieCount++;
            tiePara.innerText = `Tie: ${tieCount}`;
        } else if ((playerSelection == 'rock' && cpuSelection == 'scissors') || (playerSelection == 'paper'  && cpuSelection == 'rock') || (playerSelection == 'scissors' && cpuSelection == 'paper')) {
            playerScore++;
            pScorePara.innerText = `You: ${playerScore}`;
        } else {
            cpuScore++;
            cScorePara.innerText = `Computer: ${cpuScore}`;
        }
    }
    endGame();
    return;
}







