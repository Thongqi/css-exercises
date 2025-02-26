const log = console.log

log("Hello cat")

var humanScore, computerScore;
humanScore = computerScore = 0;


playGame()

function playGame(){
    let round = 0;
    while (round < 5){
        var humanChoice = getHumanChoice().toLowerCase()
        var computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
        round++;
    }
    if (humanScore > computerScore){
        log('%cYOU WON!! (ToT)/~~~', 'font-size: 16px; font-weight: bold;')
    }
    else{
        log('%cYOU LOSE....(；′⌒`)', 'font-size: 16px; font-weight: bold;')
    }
    
}


function getComputerChoice(){
    let x = Math.floor(Math.random() * 3)
    // log(x)
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



function playRound(humanChoice, computerChoice){
    // log(humanChoice, computerChoice)
    if (humanChoice === 'rock'){
        switch (computerChoice){
            case 'paper':
                log('You lose(´。＿。｀)')
                computerScore++
                break;
            case 'rock':
                log('Is a tie👔')
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
                break;
        }
    }

    else if (humanChoice === 'paper') {
        switch (computerChoice){
            case 'paper':
                log('Is a tie👔')
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