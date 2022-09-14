//display the user & computers choice in the result area as text
const resultDisplay = document.getElementById('result-area')
//enter a const for each of the choices as an array
const choices =['rock', 'paper', 'scissors', 'lizard', 'spock']
//when a user clicks a choice, generate a computer result,
const playGame = (userChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    getResults(userChoice, computerChoice)
}
//create result values for each game outcome, to change incrementally with results
let playerWins = 0;
let gameDraw = 0;
let computerWins = 0;


//collect user choice + computer generated result & combine the results as text values & display the results in text 
//in the index text area
const getResults = (userChoice, computerChoice) => {

    let playerScore = document.getElementById('player-score');
    let computerScore = document.getElementById('computer-score')
    let drawScore = document.getElementById('game-draw')

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
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + '<br> YOU WIN!'
            //if player & computer results are as above, incrementally increase the playerWins score, and insert to the
            //playerWins const, which updates the player-score id in index.html
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
            //if player & computer results are as above, incrementally increase the computerWins score, and insert to the
            //computerWins const, which updates the computer-score id in index.html
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + '<br> YOU LOSE!'           
            computerScore.innerHTML = ++computerWins;
            break
        case 'rockrock':
        case 'scissorscissors':
        case 'paperpaper':
        case 'lizardlizard':
        case 'spockspock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + '<br> YOU DRAW!'
            drawScore.innerHTML= ++gameDraw;
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