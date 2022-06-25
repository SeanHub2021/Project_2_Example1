// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You selected ${gameType}`)
            }
        })
    }
})

// All the variable combinations & whether they are win or lose, and track that to a score
//Use Switch function?
function runGame() {
  // if (Math.floor(Math.random() * 4) +1 === 0){
   //     return 'Rock';
   //   }
   //     else if (Math.floor(Math.random() * 4) +1 === 1){
   //   return 'Paper';
   //   }
   //     else if (Math.floor(Math.random() * 4) +1 === 2) {
   //   return 'Scissor';
   //   }
   //     else if (Math.floor(Math.random() * 4) +1 === 3) {
   //   return 'Lizard';
   //  }
   //    else if (Math.floor(Math.random() * 4) +1 === 3) {
   //   return 'Spock';
   //     }

    //console.log(letsPlay());
}

// Computers input for the game. 
//'Data Type' in an array 0-4 (for each button/item), random number to generate an integer.
// Add timer, "1,2,3, go!" to delay response
// Add result to results area & player score
function letsPlay(event) {
    //get the Button choices into an array
    let buttonChoices = document.getElementsByClassName('btn--big')[0];
    //Set up the array to hold the move choice
    let computerMove = [];
    //iterate through the choices
    for (let buttonChoice of buttonChoices) {
        Math.floor(Math.random() * 4) +1
        buttonChoice.push(computerMove);
    }

}

//Tracks the player & computers score
function incrementScore() {
    
}

//Player lost round
function youLostRound() {
    
}

//Player won round
function youWonRound() {
}

// Best of 5
// Track scores for user or computer, first to 5 wins wins the game overall
// Give output message to 'Result Area' in index.html
function gameWinner() {

}