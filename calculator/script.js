
document.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button')
    var firstValue
    var secValue
    

    buttons.forEach((button) => {
        
        button.addEventListener('click', (e) => {
            var value = e.target.getAttribute('data-value')
            console.log(value)
            var operator
            // if +-*/= is press, store the first string
            if (parseInt(value)){
                if (operator){
                    secValue = secValue? secValue + value: value
                }
                else{
                    firstValue = firstValue? firstValue + value: value
                    console.log(firstValue)
                }
                display(firstValue, operator, secValue)
            }
            else{
                if(secValue){
                    operator = value
                }
                else if (operator){
                    //perform operation
                    console.log(firstValue)
                    var result = operation(firstValue, secValue, operator)
                    display(result)

                    firstValue = ''
                    secValue = ''
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
  
function multiply(array) {
    return array.reduce((acc, val) => 
         acc * val 
      )
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
    num1 = joinNumber(num1)
    num2 = joinNumber(num2)
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

