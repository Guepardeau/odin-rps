let randomNumber;
let compSelection;
let playerSelection;
let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    if (randomNumber === 1) {
        return compSelection = "rock";
    } else if (randomNumber === 2) {
        return compSelection = "paper";
    } else if (randomNumber === 3) {
        return compSelection = "scissors";
    }
    };  

function game() {
   for (let i=0; i <= 4; i++) {

        randomNumber = Math.floor(Math.random()* 3)+ 1;
        getComputerChoice();
        playerSelection = prompt("Please choose Rock, Paper or Scissors!").toLowerCase();
        console.log(`You: ${playerScore} Computer ${compScore}`);

        if (playerSelection === "rock" && compSelection === "paper"){
                console.log("Oh No! You lost, Paper beats Rock :(");
                return playerLose();
            } else if (playerSelection === "rock" && compSelection === "scissors") {
                console.log("Well done! You won, Rock beats Scissors!");
                return playerWin();
            } else if (playerSelection === "paper" && compSelection === "rock") {
                console.log("Well done! You won, Paper beats Rock!");
                return playerWin();
            } else if (playerSelection === "paper" && compSelection === "scissors") {
                console.log("Oh No! You lost, Scissors beats Paper :(");
                return playerLose(); 
            } else if (playerSelection === "scissors" && compSelection === "rock") {
                console.log("Oh No! You lost, Rock beats Scissors :(");
                return playerLose();
            } else if (playerSelection === "scissors" && compSelection === "paper") {
                console.log("Well done! You won, Scissors beats Paper!");
                return playerWin();
            } else if (playerSelection === compSelection) {
                console.log("It's a tie! Try again.");
            } else {
                console.log("Uh Oh! Something's gone wrong. Refresh the page to try again!");
            }  
            }

            function playerLose () {
                ++compScore;
                if (compScore || playerScore === 5) {
                    gameEnd();
                } else {
                    game();
                }
            }
            
            function playerWin () {
                ++playerScore;
                if (compScore || playerScore === 5) {
                    gameEnd();
                } else {
                    game();
                }
            }

        };

game();



function gameEnd() {
    console.log(`You: ${playerScore} Computer ${compScore}`);
    if (playerScore === 5){
        console.log("You won!!! Refresh to play again.");
        return
    } else if (compScore === 5){
        console.log("Oh no :( You lost. Refresh to try again.");
        return
    } else {
        game();
    }
}
