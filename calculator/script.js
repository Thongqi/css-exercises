
document.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button')
    var firstValue
    var secValue
    var operator

    buttons.forEach((button) => {
        
        button.addEventListener('click', (e) => {
            var value = e.target.getAttribute('data-value')
            console.log(value)
            
            display(firstValue, operator, secValue)
            // if +-*/= is press, store the first string
            if (parseInt(value)){
                if (operator){
                    secValue = secValue? secValue + value: value
                }
                else{
                    firstValue = firstValue? firstValue + value: value
                    console.log(firstValue, secValue)
                    
                }
                
            }
            else{
                if(!secValue){
                    operator = value
                    console.log(operator)
                }
                else if (operator){
                    //perform operation
                    console.log(firstValue)
                    var result = operation(firstValue, secValue, operator)
                    display(result)
                    console.log(result)
                    firstValue = secValue = operator = ''
                }
                else{
                    //donothing
                }
            }
            
        })
    })

})

function add(num1, num2) {
    return num1 + num2  
  };
  
function subtract(num1, num2) {
      return num1 - num2
  };
  
function sum(array) {
    return array.reduce((acc, val) =>
       acc + val, 0)
      
};
  
function multiply(num1, num2) {
    return num1 * num2
  };

function divide(num1, num2){
    return num1 / num2
}

function checkCase(value){
    switch (value) {
        case add:
            return 'add'
            
            break;
    
        default:
            break;
    }
}

function operation(num1, num2, operator){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    switch (operator){
        case 'add':
            return add(num1, num2)
        case 'subtract':
            return subtract(num1, num2)
        case 'multiply':
            return multiply(num1, num2)
        case 'divide':
            return divide(num1, num2)
    }
}

function joinNumber(array){
    return parseInt(array.join(''))
}

function display(...array){
    if (array.length <= 1){
        ocument.querySelector('.display').innerHTML = array[0]
    }
    else{
        document.querySelector('.display').innerHTML = array.join('')
    }
    
}

function getValue(e){
    
}

