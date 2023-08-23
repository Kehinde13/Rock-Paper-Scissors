const output = document.querySelector("#output")
const buttons = Array.from(document.querySelectorAll("button")) 
const modal = document.querySelector("#modal")
const modalContent = document.querySelector(".modalContent")
const playAgain = document.querySelector("#playAgain")
let displayComputerScore = document.querySelector(".computerScore")
let displayPlayerScore = document.querySelector(".playerScore")
let playerChoice;
let playerScore = 0;
let computerScore = 0;
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
        output.innerText = "you lose rock beat scissors"
        return 'lose'
     } else if(computer == "scissors" && player == "rock"){
        output.innerText = "you win rock beat scissors"
        return "win"
     } else if(computer == "paper" && player == "rock"){
        output.innerText = "you lose paper beat rock"
        return 'lose'
     } else if(computer == "rock" && player == "paper"){
        output.innerText = "you win paper beat rock"
        return "win"
     } else if(computer == "paper" && player == "scissors"){
        output.innerText = "you win scissors beat paper"
        return "win"
     } else if(computer == "scissors" && player == "paper"){
        output.innerText = "you lose scissors beat paper"
        return 'lose'
     }
}

function playGame() {
     let result = playRound(getComputerChoice(), playerChoice)
     if(result === "win"){
      displayPlayerScore.innerText = `${++playerScore}`;  
     } else if (result === "lose"){
      displayComputerScore.innerText = `${++computerScore}`;
     }  
}

buttons.forEach((button) => {
   button.addEventListener('click', () => {
      //set playerChoice to the current button clicked
      playerChoice = button.className;
      if(playerScore === 5){
        modal.style.display = "block"
        modalContent.children[0].textContent = 'YOU WON'
        modalContent.children[1].textContent = `${playerScore} - ${computerScore}`
      } else if(computerScore === 5) {
         modal.style.display = "block"
         modalContent.children[0].textContent = 'YOU LOST'
         modalContent.children[1].textContent = `${playerScore} - ${computerScore}`
      } else {
         playGame()
      } 
   })
})

playAgain.addEventListener('click', () => {
   /* this method reloads the current page */
   location.reload()
})









  