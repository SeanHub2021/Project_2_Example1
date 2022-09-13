// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function() {            
                let gameType = this.getAttribute("data-type");
                playGame(gameType)            
        })
    }
})

//display the user & computers choice in the result area as text
const resultDisplay = document.querySelector('#result-area')
//enter a const for each of the choices as an array
const choices =['rock', 'paper', 'scissors', 'lizard', 'spock']
//when a user clicks a choice, generate a computer result,
const playGame = (userChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    getResults(userChoice, computerChoice)
}
//create result values for each game outcome, to change incrementally with results
let playerWins = 0;
let computerWins = 0;


//collect user choice + computer generated result & combine the results as text values & display the results in text 
//in the index text area
const getResults = (userChoice, computerChoice) => {

    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score')
    switch (userChoice + computerChoice) {
        case 'rocklizard':
        case 'rockscissors':
        case 'paperrock':
        case 'paperspock':
        case 'scissorspaper':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'lizardspock':
        case 'spockrock':
        case 'spockscissors':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' YOU WIN!'
            playerScore.innerHTML = ++playerWins;
            break
        case 'lizardrock':
        case 'scissorsrock':
        case 'rockpaper':
        case 'spockpaper':
        case 'paperscissors':
        case 'lizardscissors':
        case 'paperlizard':
        case 'spocklizard':
        case 'rockspock':
        case 'scissorsspock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' YOU LOSE!'           
            computerScore.innerHTML = ++computerWins;
            break
        case 'rockrock':
        case 'scissorscissors':
        case 'paperpaper':
        case 'lizardlizard':
        case 'spockspock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' YOU DRAW!'
  
        }
}


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

// Best of 5
// Track scores for user or computer, first to 5 wins wins the game overall
// Give output message to 'Result Area' in index.html
function gameWinner() {
}