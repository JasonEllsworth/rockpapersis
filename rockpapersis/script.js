//const choiceArray = ['Rock', "Paper", "Sissors"];
//const getComputerChoice = Math.floor(Math.random() * choiceArray.length);
//const comp = choiceArray[getComputerChoice]

/*

main RPS function for the game without a loopible variable. It also does NOT check if the user makes any other statement other than the original three choices.

function playGame (userChoice) {
    const choiceArray = ['rock', "paper", "sissors"];
    const getComputerChoice = Math.floor(Math.random() * choiceArray.length);
    const comp = choiceArray[getComputerChoice];

    
    if (userChoice === 'rock' && comp === 'sissors' || userChoice === 'paper' && comp === 'rock' || userChoice === 'sissor' && comp === 'paper') {
        console.log('you win!');
    } else if (userChoice === comp) {
        console.log('tie')
    } else {
        console.log('you lose')
    }
    

    console.log(userChoice, comp);
    userChoice = prompt('Rock, paper or sissor?').toLowerCase())
}
*/


/*

javascript can now loop through a game five times and display the win or lose condition.

function playGame () {
    for (let i = 0; i < 5; i++) {
    let userChoice = prompt('Rock, Paper, Sissor, shoot!').toLowerCase();
    const choiceArray = ['rock', "paper", "sissors"];
    const getComputerChoice = Math.floor(Math.random() * choiceArray.length);
    const comp = choiceArray[getComputerChoice];
    
    if (userChoice =! 'rock' || 'sissor' || 'paper') {
        alert('err!')
    }

    if (userChoice === 'rock' && comp === 'sissors' || userChoice === 'paper' && comp === 'rock' || userChoice === 'sissor' && comp === 'paper') {
        console.log('you win!')
    } else if (userChoice === comp) {
        console.log('tie')
    } else {
        console.log('you lose')
    }

    console.log(userChoice, comp);
}
}

*/


/*complete game of RPS*/


//global program variables
let playScore = 0;
let compScore = 0;
let gameLoop = 0;


//first function which will initialize the game.

function playGame () {
    let userChoice = prompt('Rock, Paper, Sissor, shoot!').toLowerCase();
    const choiceArray = ['rock', "paper", "sissors"];
    const getComputerChoice = Math.floor(Math.random() * choiceArray.length);
    const comp = choiceArray[getComputerChoice];

    if (userChoice === 'rock' && comp === 'sissors' || userChoice === 'paper' && comp === 'rock' || userChoice === 'sissor' && comp === 'paper') {
        console.log('you win!')
         playScore = playScore + 1;
        
    } else if (userChoice === comp) {
        console.log('tie')
    } else {
        console.log('you lose')
        compScore = compScore + 1;
    }
    console.log(userChoice, comp);
    console.log(playScore, compScore);
    checkScore()

}
//function which will check the game state and when to terminate the game
function checkScore () {
    while (playScore < 5 || compScore < 5) {
        console.log(gameLoop);
        gameLoop = gameLoop + 1;
        playGame()
    }
    console.log('terminate game');
    
}
console.log(playScore, compScore);







