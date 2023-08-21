const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const output = document.querySelector("#output")
const computerScore = document.querySelector("#computerScore")
const playerScore = document.querySelector("#playerScore")



let ChoicesArr = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1)
    return ChoicesArr[choice - 1];
}



function playRound(computer, player) {
    if (computer == "rock" && player == "rock"){
        return "tie rock and rock"
     } else if (computer == "scissors" && player == "scissors"){
        return "tie scissors and scissors"
     }  else if (computer == "paper" && player == "paper"){
        return "tie paper and paper"
     } else if(computer == "rock" && player == "scissors"){
        return "lose rock beat scissors"
     } else if(computer == "scissors" && player == "rock"){
        return "win rock beat scissors"
     } else if(computer == "paper" && player == "rock"){
        return "lose paper beat rock"
     } else if(computer == "rock" && player == "paper"){
        return "win paper beat rock"
     } else if(computer == "paper" && player == "scissors"){
        return "win scissors beat paper"
     } else if(computer == "scissors" && player == "paper"){
        return "lose scissors beat paper"
     } else {
        return "lose you choose wrong"
     }
}





 /*

   



function playGame() {
    let computerScore = 0;
    let playerScore = 0;
    let gamePlayed = 0;
    //loop to call the playround 5 times
    for(let i = gamePlayed; i < 5; i++) {
        //for every iteration call plyRound and save the result
     let result = playRound(getComputerChoice(), getPlayerChoice())
     console.log(result);
     //increase the score based on the result
     if(result.includes("win")){
        playerScore += 1
     } else if (result.includes("lose")){
        computerScore += 1
     }
    }
    
    //output the final score
    if (computerScore > playerScore) {
        console.log(`you lose by ${computerScore} to ${playerScore}`);
    } else if(playerScore > computerScore) {
        console.log(`you win by ${playerScore} to ${computerScore}`);
    } else {
        console.log('tie game');
    }
}

playGame()







 */