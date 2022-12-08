const choice = ["rock", "papers", "scissors"];

function computerSelection(choice) {
    const randomValue = Math.floor(Math.random()*choice.length);
    const computerChoice = choice[randomValue];
    return computerChoice;
}

function playerSelection(choice) {
    let playerchoice = prompt("Choose between Rock Paper Scissors");
    return playerchoice; 
}

function playRound(playerselection,computerselection){  
    if (playerSelection + computerSelection === "rockscissors"){
        "You Win!"
    }
}

function game(){
    
}
    
console.log(computerSelection(choice));

console.log(playerSelection());