const log = console.log

log("Hello cat")

var humanScore, computerScore;


document.addEventListener("DOMContentLoaded", ()=>{
    playGame()
}

)


function playGame(){
    humanScore = computerScore = 0;

    var humanChoice = document.querySelector(".choices").addEventListener('click', getHumanChoice()) 
    var computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)
    var choices = {
        'rock': '✊', 
        'scissor': '✌',
        'paper': '🖐'
    }
    document.querySelector('#ur_choice').innerHTML = choices[humanChoice]
    document.querySelector('#comp_choice').innerHTML = choices[computerChoice]
    
    document.querySelector('#ur_score').innerHTML = humanScore
    document.querySelector('#comp_score').innerHTML = computerScore
    
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
    return this.getAttribute("data-choice")
}



function playRound(humanChoice, computerChoice){
    // log(humanChoice, computerChoice)
    const result = document.querySelector('#result')

    if (humanChoice === 'rock'){
        switch (computerChoice){
            case 'paper':
                result.innerHTML('You lose(´。＿。｀)')
                computerScore++
                break;
            case 'rock':
                result.innerHTML('Computer: ✊  Is a tie👔')
                break;
            case 'scissor':
                result.innerHTML('Computer: ✌ You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
                break;
        }
    }
    
    else if (humanChoice === 'scissor'){
        switch (computerChoice){
            case 'paper':
                result.innerHTML('Computer: 🖐  You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
                break;
            case 'rock':
                result.innerHTML('Computer: ✊   You lose(´。＿。｀)')
                computerScore++
                break;
            case 'scissor':
                result.innerHTML('Computer: ✌  Is a tie👔')
                break;
        }
    }

    else if (humanChoice === 'paper') {
        switch (computerChoice){
            case 'paper':
                result.innerHTML('Computer: 🖐  Is a tie👔')
                break;
            case 'rock':
                result.innerHTML('Computer: ✊   You wonnnnnn(｡･∀･)ﾉﾞ')
                humanScore++;
                break;
            case 'scissor':
                result.innerHTML('Computer: ✌  You lose(´。＿。｀)')
                computerScore++
                break;
        }
    }
    log('You:' + humanScore, 'Computer:' + computerScore)
}