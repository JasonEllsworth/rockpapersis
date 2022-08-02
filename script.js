//const choiceArray = ['Rock', "Paper", "Sissors"];
//const getComputerChoice = Math.floor(Math.random() * choiceArray.length);
//const comp = choiceArray[getComputerChoice]

const userChoice = prompt('Rock, paper or sissor?')

function playGame (userChoice) {
    const choiceArray = ['Rock', "Paper", "Sissors"];
    const getComputerChoice = Math.floor(Math.random() * choiceArray.length);
    const comp = choiceArray[getComputerChoice]


    console.log(userChoice, comp)
}

 playGame(userChoice)

