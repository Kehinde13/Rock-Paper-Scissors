const output = document.querySelector("#output")
let computerScore = document.querySelector(".computerScore")
let playerScore = document.querySelector(".playerScore")
const buttons = Array.from(document.querySelectorAll("button")) 
let playerChoice;
let ChoicesArr = ['rock', 'paper', 'scissors']

/* console.log(buttons); */

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



function playGame() {
   let score1 = 0;
   let score2 = 0;

   
    //loop to call the playround 5 times
    for(let i = 0; i < 5; i++) {
        //for every iteration call plyRound and save the result
     let result = playRound(getComputerChoice(), playerChoice)
     console.log(result);
     //increase the score based on the result
     if(result.includes("win")){
        score1 += 1
     } else if (result.includes("lose")){
        score2 += 1
     }

     computerScore.innerText = `${score2}`;
     playerScore.innerText = `${score1}`;

    }
}

buttons.forEach((button) => {
   button.addEventListener('click', () => {
      playerChoice = button.className;
      console.log(playerChoice);
      playGame()
   })
})









 