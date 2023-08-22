const output = document.querySelector("#output")
let displayComputerScore = document.querySelector(".computerScore")
let displayPlayerScore = document.querySelector(".playerScore")
const buttons = Array.from(document.querySelectorAll("button")) 
let playerChoice;
let playerScore = 0;
let computerScore = 0
let ChoicesArr = ['rock', 'paper', 'scissors']


function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1)
    return ChoicesArr[choice - 1];
}

function playRound(computer, player) {
    if (computer == "rock" && player == "rock"){
        output.innerText = "tie rock and rock"
        return "tie"
     } else if (computer == "scissors" && player == "scissors"){
        output.innerText = "tie scissors and scissors"
        return "tie"
     }  else if (computer == "paper" && player == "paper"){
        output.innerText = "tie paper and paper"
        return "tie"
     } else if(computer == "rock" && player == "scissors"){
        output.innerText = "lose rock beat scissors"
        return 'lose'
     } else if(computer == "scissors" && player == "rock"){
        output.innerText = "win rock beat scissors"
        return "win"
     } else if(computer == "paper" && player == "rock"){
        output.innerText = "lose paper beat rock"
        return 'lose'
     } else if(computer == "rock" && player == "paper"){
        output.innerText = "win paper beat rock"
        return "win"
     } else if(computer == "paper" && player == "scissors"){
        output.innerText = "win scissors beat paper"
        return "win"
     } else if(computer == "scissors" && player == "paper"){
        output.innerText = "lose scissors beat paper"
        return 'lose'
     }
}

function playGame() {
     let result = playRound(getComputerChoice(), playerChoice)
     console.log(result);
     if(result.includes("win")){
      displayPlayerScore.innerText = `${++playerScore}`;  
     } else if (result.includes("lose")){
      displayComputerScore.innerText = `${++computerScore}`;
     }  
}

buttons.forEach((button) => {
   button.addEventListener('click', () => {
      playerChoice = button.className;
      if(playerScore === 5){
        alert("You Win Refresh to play again")
      } else if(computerScore === 5) {
         alert("You lose Refresh to play again")
      } else {
         playGame()
      } 
   })
})









  