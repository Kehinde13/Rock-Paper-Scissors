
let ChoicesArr = ['Rock', 'Paper', 'Scissors']


function getComputerChoice() {
    //get a random number between 1 and 3
    let choice = Math.floor((Math.random() * 3) + 1)
    
    //use the number to get a random choice from the array
    return ChoicesArr[choice - 1];
}

//get player choice
let playerChoice = prompt("Rock, Paper or Scissors: ")
function getPlayerChoice(playerChoice) {
    if (playerChoice === 'Rock') {
        return ChoicesArr[0];
    } else if (playerChoice === 'Paper') {
        return ChoicesArr[1]
    } else if(playerChoice === 'Scissors') {
        return ChoicesArr[2]
    } else {
        alert("choose between Rock, Paper or Scissors")
    }
}


function playGame(player1, player2) {
    console.log(getComputerChoice(), getPlayerChoice());
}

playGame()





