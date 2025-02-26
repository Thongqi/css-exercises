const log = console.log

log("Hello cat")

var humanScore, computerScore;
humanScore = computerScore = 0;

var humanChoice = getHumanChoice().toLowerCase()
var computerChoice = getComputerChoice()

playGame()

function playGame(){
    let round = 0;
    while (round < 5){
        playRound()
        round++;
    }
    
}


function getComputerChoice(){
    let x = Math.floor(Math.random() * 3)
    log(x)
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



function playRound(){
    log(humanChoice, computerChoice)
    if (humanChoice === 'rock'){
        switch (computerChoice){
            case 'paper':
                log('You lose(´。＿。｀)')
                computerScore++
                break;
            case 'rock':
                log('Is a tie👔')
                computerScore++
                humanScore++
                break;
            case 'scissor':
                log('You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
                break;
        }
    }
    
    else if (humanChoice === 'scissor'){
        switch (computerChoice){
            case 'paper':
                log('You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
                break;
            case 'rock':
                log('You lose(´。＿。｀)')
                computerScore++
                break;
            case 'scissor':
                log('Is a tie👔')
                computerScore++
                humanScore++
                break;
        }
    }

    else if (humanChoice === 'paper') {
        switch (computerChoice){
            case 'paper':
                log('Is a tie👔')
                computerScore++
                humanScore++
                break;
            case 'rock':
                log('You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
                break;
            case 'scissor':
                log('You lose(´。＿。｀)')
                computerScore++
                break;
        }
    }
    log('You:' + humanScore, 'Computer:' + computerScore)
}