let randomNumber = Math.floor(Math.random()* 3)+ 1;
let playerSelection = prompt("Please choose Rock, Paper or Scissors!").toLowerCase();
let compSelection;

function getComputerChoice() {

    if (randomNumber === 1) {
        return compSelection = "rock";
    } else if (randomNumber === 2) {
        return compSelection = "paper";
    } else if (randomNumber === 3) {
        return compSelection = "scissors";
    }
    };  

function singleround() {
   
    if (playerSelection === "rock" && compSelection === "paper"){
        console.log("Oh No! You lost, Paper beats Rock :(");
    } else if (playerSelection === "rock" && compSelection === "scissors") {
        console.log("Well done! You won, Rock beats Scissors!");
    } else if (playerSelection === "paper" && compSelection === "rock") {
        console.log("Well done! You won, Paper beats Rock!");
    } else if (playerSelection === "paper" && compSelection === "scissors") {
        console.log("Oh No! You lost, Scissors beats Paper :(");
    } else if (playerSelection === "scissors" && compSelection === "rock") {
        console.log("Oh No! You lost, Rock beats Scissors :(");
    } else if (playerSelection === "scissors" && compSelection === "paper") {
        console.log("Well done! You won, Scissors beats Paper!");
    } else if (playerSelection === compSelection) {
        console.log("It's a tie! Try again.");
    } else {
        console.log("Uh Oh! Something's gone wrong. Refresh the page to try again!");
    }  
    };

getComputerChoice(compSelection);


console.log(compSelection);
console.log(playerSelection);

singleround(playerSelection,compSelection);