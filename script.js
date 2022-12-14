const choice = ["rock", "paper", "scissors"];

function computerSelection (choice) {
    const randomValue = Math.floor(Math.random()*choice.length);
    return choice.slice(randomValue, randomValue + 1)[0];
}

function playRound (playerchoice,computerSelection){     
    if (playerchoice === computerSelection) {
        return "It is a tie"
    } else if (playerchoice + computerSelection === 'rockscissors') {
        return "You win! Rock beats scissors";
    } else if (playerchoice + computerSelection === 'rockpaper') {
        return "You lose! paper beats rock";
    } else if (playerchoice + computerSelection === 'paperscissors') {
        return "You win! Paper beats scissors";
    } else if (playerchoice + computerSelection === 'paperrock') {
       return "You lose! Rock beats paper";
    } else if (playerchoice + computerSelection === 'scissorsrock') {
        return "You lose! Scissors beats rock";
    } else if (playerchoice + computerSelection === 'scissorspaper') {
        return "You win! scissors beats paper";
    }
    else { 
        return "Invalid choice. Please try again.";
    }
}


function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Select Rock, Paper, or Scissors!").toLowerCase();
    const computerChoice = computerSelection(choice);
    const result = playRound(playerChoice, computerChoice);

    if (result.startsWith("You win")) {
      playerScore++;
    } else if (result.startsWith("You lose")) {
      computerScore++;
    }

    console.log(result);
  }

  if (playerScore > computerScore) {
    console.log("You are the winner!");
  } else if (computerScore > playerScore) {
    console.log("The computer is the winner!");
  } else {
    console.log("The game is a tie!");
  }
}


console.log(game());


