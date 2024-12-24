console.log("hello world!");

let playerScore = 0;
let playerChoice;
let computerScore = 0;
const maxRounds = 5;

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = getRandomIntInclusive(0, 2)
    return choices[choice];
}

function playRound(humanChoice, computerChoice) {
    let lowerHumanChoice = humanChoice.toLowerCase();
    let lowerComputerChoice = computerChoice.toLowerCase();
    
    console.log(`Computer choice: ${lowerComputerChoice}`);

    switch (lowerHumanChoice) {
        case "rock":
            if (lowerComputerChoice == "paper"){
                computerScore++;
            }
            else if (lowerComputerChoice == "scissors") {
                playerScore++;
            }
            else if (lowerComputerChoice == "rock") {
                console.log("You have tied, play again");
            }
            else {
                throw new Error("Incorrect Computer input: Input should be either, rock, paper or scissors");
            }
            break;
        case "paper":
            if (lowerComputerChoice == "paper"){
                console.log("You have tied, play again");
            }
            else if (lowerComputerChoice == "scissors") {
                computerScore++;
            }
            else if (lowerComputerChoice == "rock") {
                playerScore++;
            }
            else {
                 throw new Error("Incorrect Computer input: Input should be either, rock, paper or scissors");
            }
            break;
        case "scissors":
            if (lowerComputerChoice == "paper"){
                playerScore++;
            }
            else if (lowerComputerChoice == "scissors") {
                console.log("You have tied, play again");
            }
            else if (lowerComputerChoice == "rock") {
                computerScore++;
            }
            else {
                 throw new Error("Incorrect Computer input: Input should be either, rock, paper or scissors");
            }
            break;
        default:
            throw new Error("Incorrect Player input: Input should be either, rock, paper or scissors");
    }
        console.log(`Scores => Player: ${playerScore}, Computer: ${computerScore}`);    
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
        let comp = getComputerChoice();
        button.style.backgroundColor = "pink";
        console.log(`Player has played: ${playerChoice}\nComputer has played: ${comp}`);
        playRound(playerChoice, comp);
    });
    button.addEventListener("mouseleave", () =>{
        button.style.backgroundColor = "antiquewhite";
    });
});

/*
function restartGame(round, gameOver, winner) {
    let restart = prompt("Do you want to restart the game? (yes or no)");
    let response = restart.toLowerCase();
    if (response === "yes") {
        playerScore = 0;
        computerScore = 0;
        playgame()
    }
}

function playgame() {
    let round = 1;
    let gameOver = false;
    let winner = null;

    
    while (round <= maxRounds && !gameOver){
       try{
            let humanMove = getHumanChoice();
            let computerMove = getComputerChoice();
            playRound(humanMove, computerMove);
            round++;
        }
        catch(e) {  
            console.error(e);
        }
        if (playerScore >= 3) {
            winner = "player";
            gameOver = true;
        }
        else if (computerScore >= 3){
            winner = "computer";
            gameOver = true;
        }
        else if (round > maxRounds && (computerScore == playerScore || computerScore < 3 && playerScore < 3)) {
            console.log("The game has ended in a tie");
            gameOver = true;
        }
    }

    if (winner) {
        console.log(`The winner is: ${winner}`);
    } else {
        console.log("The game is a tie!");
    }

    restartGame();
}

playgame();
*/


