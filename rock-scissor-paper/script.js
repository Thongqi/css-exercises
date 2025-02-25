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
    if (humanChoice === 'rock'){
        switch (computerChoice){
            case 'paper':
                log('You lose(´。＿。｀)')
                computerScore++
            case 'rock':
                log('Is a tie👔')
                computerScore++
                humanScore++
            case 'scissor':
                log('You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
        }
    }
    
    elif (humanChoice === 'scissor'){
        switch (computerChoice){
            case 'paper':
                log('You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
            case 'rock':
                log('You lose(´。＿。｀)')
                computerScore++
            case 'scissor':
                log('Is a tie👔')
                computerScore++
                humanScore++
        }
    }

    elif (humanChoice === 'paper') {
        switch (computerChoice){
            case 'paper':
                log('Is a tie👔')
                computerScore++
                humanScore++
            case 'rock':
                log('You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
            case 'scissor':
                log('You lose(´。＿。｀)')
                computerScore++
        }
    }
}