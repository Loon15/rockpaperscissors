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
let computerScore= 0;
//console.log(computerScore);


function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
//WINNING SECTION
    if(playerChoice === "rock" && computerChoice === "scissors"){
        return ("You win! Computer chose paper");
    
    }else if(playerChoice === "paper" && computerChoice === "rock"){
    return ("You win! Computer choce rock");

    }else if(playerChoice === "scissors" && computerChoice === "paper"){
     return ("You win! Computer chose paper");
//LOSING SECTION
    }else if(playerChoice === "rock" && computerChoice === "paper"){
        return ("You lose! Computer chose paper");

    }else if(playerChoice === "paper" && computerChoice === "scissors"){
        return ("You lose! Computer chose scissors");

    }else if(playerChoice === "scissors" && computerChoice === "rock"){
     return ("You lose! Computer chose scissors");
// TIE MATCH
    }else{
        return ("It's a tie!");
    }

}
    const playerSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    console.log(playRound(playerSelection, computerSelection));

   
   

