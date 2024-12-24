// Opening instructions
console.log("Welcome to a game of rock, paper scissors!, click any tile to continue");

// Score variables
let playerScore = 0;
let computerScore = 0;

// Game info
let round = 1;
const maxRounds = 5;
let playerChoice;
let winner = null;
let gameOver = false;

// Dynamic content to display on the screen
const playerScoreDiv = document.querySelector("#playerId");
const computerScoreDiv = document.querySelector("#computerId");
const computerMoveDiv = document.querySelector("#computerMoveId");
const gameInfoDiv = document.querySelector("#gameInfo");
const roundDiv = document.querySelector("#roundId");
const winnerText = document.createElement("p");
gameInfoDiv.appendChild(winnerText);


function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = getRandomIntInclusive(0, 2);
    return choices[choice];
}

function playRound(humanChoice, computerChoice) {
    let lowerHumanChoice = humanChoice.toLowerCase();
    let lowerComputerChoice = computerChoice.toLowerCase();

    console.log(`Playing round: ${round}`);

    switch (lowerHumanChoice) {
        case "rock":
            if (lowerComputerChoice === "paper"){
                computerScore++;
            }
            else if (lowerComputerChoice === "scissors") {
                playerScore++;
            }
            else if (lowerComputerChoice === "rock") {
                console.log("You have tied, play again");
            }
            else {
                throw new Error("Incorrect Computer input: Input should be either, rock, paper or scissors");
            }
            break;
        case "paper":
            if (lowerComputerChoice === "paper"){
                console.log("You have tied, play again");
            }
            else if (lowerComputerChoice === "scissors") {
                computerScore++;
            }
            else if (lowerComputerChoice === "rock") {
                playerScore++;
            }
            else {
                 throw new Error("Incorrect Computer input: Input should be either, rock, paper or scissors");
            }
            break;
        case "scissors":
            if (lowerComputerChoice === "paper"){
                playerScore++;
            }
            else if (lowerComputerChoice === "scissors") {
                console.log("You have tied, play again");
            }
            else if (lowerComputerChoice === "rock") {
                computerScore++;
            }
            else {
                 throw new Error("Incorrect Computer input: Input should be either, rock, paper or scissors");
            }
            break;
        default:
            throw new Error("Incorrect Player input: Input should be either, rock, paper or scissors");
    }
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`);    
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "one":
                playerChoice = "rock";
                break;
            case "two":
                playerChoice = "paper";
                break;
            case "three":
                playerChoice = "scissors";
                break;
            default:
                console.log("Unknown input");
        }
        button.style.backgroundColor = "pink";
        let comp = getComputerChoice();
        console.log(`Player has played: ${playerChoice}\nComputer has played: ${comp}`);
        playGame(playerChoice, comp);
    });
    button.addEventListener("mouseleave", () =>{
        button.style.backgroundColor = "antiquewhite";33
    });
});

function restartGame(round, gameOver, winner) {
    let restart = prompt("Do you want to restart the game? (yes or no)");
    let response = restart.toLowerCase();
    if (response === "yes") {
        playerChoice = "";
        playerScore = 0;
        computerScore = 0;
        round = 1;
        gameOver = false;
        winner = null;
        roundDiv.textContent = `Round: ${round}`;
        computerScore.textContent = `Computer: ${computerScore}`;
        playerScore.textContent = `Player: ${playerScore}`;
        winnerText.textContent = "";
    }
}

function playGame(humanMove, computerMove) {
    if (!winner){
        if (round <= maxRounds && !gameOver){

            // Play a round
            playRound(humanMove, computerMove); 

            // Update the scores and Computer move on the screen
            computerMoveDiv.textContent = `Computer move: ${computerMove}`;
            playerScoreDiv.textContent = `Player: ${playerScore}`;
            computerScoreDiv.textContent = `Computer: ${computerScore}`;
        
            
            if (playerScore >= 3) {
                winner = "player";
                gameOver = true;
            }
            else if (computerScore >= 3){
                winner = "computer";
                gameOver = true;
            }
            else if (round === maxRounds && playerScore > computerScore) {
                winner = "player";
                gameOver = true;
            }
            else if (round === maxRounds && computerScore > playerScore) {
                winner = "computer";
                gameOver = true;
            }
            else if (round === maxRounds && computerScore == playerScore ) {
                console.log("The game has ended in a tie");
                gameOver = true;
            }

            //Update the round
            round++;
            roundDiv.textContent = `Round: ${round}`;
            console.log(`Proceeding to round: ${round}`);
        }
    }
    else {
        winnerText.textContent = `The ${winner} has won`;
        restartGame(round, gameOver, winner);
    }
}