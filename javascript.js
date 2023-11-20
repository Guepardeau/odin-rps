let randomNumber = Math.floor(Math.random()* 3)+ 1;
let playerSelection = prompt("Please choose Rock, Paper or Scissors!").toLowerCase();
let compSelection;

function getComputerChoice() {

    if (randomNumber === 1) {
        let compSelection = "rock"
    } else if (randomNumber === 2) {
        let compSelection = "paper"
    } else if (randomNumber === 3) {
        let compSelection = "scissors"
    }

}

 function round(playerSelection, compSelection) {
   
    switch (playerSelection, compSelection) {
        case (playerSelection === "rock" && compSelection === "paper"):
            return("Oh No! You lost, Paper beats Rock :(");
            break;
        
        case (playerSelection === "rock" && compSelection === "scissors"):
            return("Well done! You won, Rock beats Scissors!");
            break;
        
        case (playerSelection === "paper" && compSelection === "rock"):
            return("Well done! You won, Paper beats Rock!");
            break;
            
        case (playerSelection === "paper" && compSelection === "scissors"):
            return("Oh No! You lost, Scissors beats Paper :(");
            break;

        case (playerSelection === "scissors" && compSelection === "rock"):
            return("Oh No! You lost, Rock beats Scissors :(");
            break;
            
        case (playerSelection === "scissors" && compSelection === "paper"):
            return("Well done! You won, Scissors beats Paper!");
            break;
            
        case (playerSelection === compSelection):
            return("It's a tie! Let's play again.");
            break;
                
        default: 
            return("Uh Oh! Something's gone wrong. Refresh the page to try again!");
            break;
           
    }
}




