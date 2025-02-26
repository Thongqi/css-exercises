const log = console.log

log("Hello cat")

var humanScore, computerScore;



playGame()

function playGame(){
    humanScore = computerScore = 0;
    let round = 0;
    while (round < 5){
        var humanChoice = getHumanChoice()
        var computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
        round++;
    }
    if (humanScore > computerScore){
        log('%cYOU WON THE GAME!! (ToT)/~~~', 'font-size: 16px; font-weight: bold;')
    }
    else{
        log('%cYOU LOSE THE GAME....(；′⌒`)', 'font-size: 16px; font-weight: bold;')
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
   
    var ans = prompt("Rock? Scissor? Paper?:")
    if (ans.toLowerCase() != 'rock' && ans.toLowerCase() != 'scissor' && ans.toLowerCase() != 'paper'){
        alert('Wrong input')
        getHumanChoice()
    }
    else {
        return ans
    }
}



function playRound(humanChoice, computerChoice){
    // log(humanChoice, computerChoice)
    if (humanChoice === 'rock'){
        switch (computerChoice){
            case 'paper':
                log('Computer: 🖐  You lose(´。＿。｀)')
                computerScore++
                break;
            case 'rock':
                log('Computer: ✊  Is a tie👔')
                break;
            case 'scissor':
                log('Computer: ✌ You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
                break;
        }
    }
    
    else if (humanChoice === 'scissor'){
        switch (computerChoice){
            case 'paper':
                log('Computer: 🖐  You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
                break;
            case 'rock':
                log('Computer: ✊   You lose(´。＿。｀)')
                computerScore++
                break;
            case 'scissor':
                log('Computer: ✌  Is a tie👔')
                break;
        }
    }

    else if (humanChoice === 'paper') {
        switch (computerChoice){
            case 'paper':
                log('Computer: 🖐  Is a tie👔')
                break;
            case 'rock':
                log('Computer: ✊   You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
                break;
            case 'scissor':
                log('Computer: ✌  You lose(´。＿。｀)')
                computerScore++
                break;
        }
    }
    log('You:' + humanScore, 'Computer:' + computerScore)
}