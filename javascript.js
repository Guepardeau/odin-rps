let randomNumber = Math.floor(Math.random()* 3)+ 1;
let playerSelection = prompt("Please choose Rock, Paper or Scissors!").toLowerCase();
let compSelection;

(function getComputerChoice() {

    if (randomNumber === 1) {
        return compSelection = "rock";
    } else if (randomNumber === 2) {
        return compSelection = "paper";
    } else if (randomNumber === 3) {
        return compSelection = "scissors";
    }
    })();  

console.log(compSelection);
console.log(randomNumber);

/* function round(playerSelection, compSelection) {
   
    switch (playerSelection, compSelection) {
        case (playerSelection === "rock" && compSelection === "paper"):
            console.log("Oh No! You lost, Paper beats Rock :(");
            return playerLose;
        
        case (playerSelection === "rock" && compSelection === "scissors"):
            console.log("Well done! You won, Rock beats Scissors!");
            return playerWin;
        
        case (playerSelection === "paper" && compSelection === "rock"):
            console.log("Well done! You won, Paper beats Rock!");
            return playerWin;
            
        case (playerSelection === "paper" && compSelection === "scissors"):
            console.log("Oh No! You lost, Scissors beats Paper :(");
            return playerLose;

        case (playerSelection === "scissors" && compSelection === "rock"):
            console.log("Oh No! You lost, Rock beats Scissors :(");
            return playerLose;
            
        case (playerSelection === "scissors" && compSelection === "paper"):
            console.log("Well done! You won, Scissors beats Paper!");
            return playerWin;
            
        case (playerSelection === compSelection):
            return tie;
                
        default: 
            console.log("Uh Oh! Something's gone wrong. Refresh the page to try again!");
             
           
    }
}*/