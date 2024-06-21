function getComputerChoice() {
    let rock = "ROCK";                            //Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”. 
    let paper = "PAPER";
    let scissors = "SCISSORS";
    let getRandom = Math.random();               //outputs random number using getRandom                          
//console.log(getComputerChoice());  
    if(getRandom <= 0.33) {                      // random number from 3 / 1 then 3/2 and 3/3
    return rock;

}  else if(getRandom <= 0.66) {
    return paper;

}  else{
    return scissors;
}
 
} //console.log(getComputerChoice());            //outputs rock, paper or scissors to console

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?");
    if(humanChoice === "rock" || humanChoice === "ROCK" || humanChoice === "Rock"){                      //humanChoice prompts user 
        return(humanChoice);                                                                            // humanChoice returns rock, paper, scissors when entered
    }else if(humanChoice === "paper" || humanChoice === "PAPER" || humanChoice === "Paper"){
        return(humanChoice);
    }else if(humanChoice === "scissors" || humanChoice === "SCISSORS" || humanChoice === "Scissors"){  // humanChoice is compared to each so it will only return what is listed
        return(humanChoice);
    }else{
        return(prompt("Rock, Paper, Scissors?"))     // returns prompt if misspelling or entry
    }

}//console.log(getHumanChoice().toLowerCase());

//Declare humanScore and computerScore in global scope
let humanScore = 0;
let computerScore = 0;
const humanScoreDisplay = document.getElementById("humanScore");
const computerScoreDisplay = document.getElementById("computerScore");
//console.log(computerScore);
function updateScoreDisplay(){
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}


function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    let roundResult = " ";
    
//WINNING SECTION
    if(playerChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        roundResult = "You win! Computer chose scissors!";
    
    }else if(playerChoice === "paper" && computerChoice === "rock"){
    humanScore++;
    roundResult = "You win! Computer chose rock!"

    }else if(playerChoice === "scissors" && computerChoice === "paper"){
     humanScore++;
     roundResult = "You win! Computer chose paper!";
     
//LOSING SECTION
    }else if(playerChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        roundResult = "You lose! Computer chose paper!";

    }else if(playerChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        roundResult = "You lose! Computer chose scissors!";

    }else if(playerChoice === "scissors" && computerChoice === "rock"){
     computerScore++;
     roundResult = "You lose! Computer chose rock!";
// TIE MATCH
    }else{
        roundResult = "It's a tie!";
    }



    if(humanScore === 5 || computerScore === 5){
        if(humanScore === 5){
            roundResult += `\nYou've won the game!`;
        }else{
            roundResult += `\nComputer won the game!`;
        }
    }
    updateScoreDisplay();
    return roundResult;
    
}

updateScoreDisplay();
    

const rockButton = document.querySelector("#btn1");
const paperButton = document.querySelector("#btn2");
const scissorButton = document.querySelector("#btn3");
const results = document.querySelector("#results");


rockButton.addEventListener('click', () => {
    const playerChoice = "ROCK";
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    //console.log(playRound(playerChoice, computerChoice));
    results.textContent = result;
    results.style.marginTop = "20px";
    rockButton.style.cssText = "color: white; background: firebrick;"

    if(humanScore === 5 || computerScore === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    }
});

paperButton.addEventListener('click', () => {
    const playerChoice = "PAPER";
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    //console.log(playRound(playerChoice, computerChoice));
    results.textContent = result;
    results.style.marginTop = "20px";
    paperButton.style.cssText = "color: firebrick; background: white;"

    if(humanScore === 5 || computerScore === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    }
});

scissorButton.addEventListener('click', () => {
    const playerChoice = "SCISSORS";
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    //console.log(playRound(playerChoice, computerChoice))
    results.style.marginTop = "20px";
    results.textContent = result;
    scissorButton.style.cssText = "color: white; background: firebrick;"

    if(humanScore === 5 || computerScore === 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    }
});




   
   

