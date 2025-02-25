const log = console.log

log("Hello cat")



function getComputerChoice(){
    let x = Math.floor(Math.random() * 3)
    switch (x) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissor';
            break
        case 2:
            return 'paper';
            break
        default:
            return 'error';
            break
    }
    
}

function getHumanChoice(){
    return prompt("Rock? Scissor? Paper?:")
}

var humanScore = computerScore = 0;
var humanChoice = getHumanChoice().toLowerCase()
var computerChoice = getComputerChoice()

function playRound(){

}