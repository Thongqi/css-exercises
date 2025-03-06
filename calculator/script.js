
document.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button')
    var firstValue
    var secValue
    var operator

    buttons.forEach((button) => {
        
        button.addEventListener('click', (e) => {
            var value = e.target.getAttribute('data-value')
            console.log(value)
            
            
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
            display(firstValue, operator, secValue)
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
    return num 1 * num2
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
            add(num1, num2)
        case 'subtract':
            subtract(num1, num2)
        case 'multiply':
            multiply(num1, num2)
        case 'divide':
            divide(num1, num2)
    }
}

function joinNumber(array){
    return parseInt(array.join(''))
}

function display(...array){
    document.querySelector('.display').innerHTML = array.join('')
}

function getValue(e){
    
}

